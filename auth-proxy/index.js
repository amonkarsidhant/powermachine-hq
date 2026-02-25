/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const { Issuer, generators } = require('openid-client');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();

const requiredEnv = ['CLIENT_ID', 'CLIENT_SECRET', 'TENANT_ID', 'SESSION_SECRET', 'PUBLIC_URL'];
const missing = requiredEnv.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Missing required env vars: ${missing.join(', ')}`);
  process.exit(1);
}

const PORT = parseInt(process.env.PORT || '3000', 10);
const TARGET_URL = process.env.TARGET_URL || 'http://127.0.0.1:18789';
const SCOPE = process.env.OIDC_SCOPE || 'openid profile email';
const PUBLIC_URL = process.env.PUBLIC_URL.replace(/\/$/, '');
const CALLBACK_PATH = '/callback';

const app = express();

app.set('trust proxy', 1);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

let client;
(async () => {
  const issuer = await Issuer.discover(
    `https://login.microsoftonline.com/${process.env.TENANT_ID}/v2.0/.well-known/openid-configuration`
  );

  client = new issuer.Client({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uris: [`${PUBLIC_URL}${CALLBACK_PATH}`],
    response_types: ['code'],
  });

  app.get('/login', (req, res) => {
    const codeVerifier = generators.codeVerifier();
    const codeChallenge = generators.codeChallenge(codeVerifier);
    req.session.codeVerifier = codeVerifier;
    const authUrl = client.authorizationUrl({
      scope: SCOPE,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
      redirect_uri: `${PUBLIC_URL}${CALLBACK_PATH}`,
    });
    res.redirect(authUrl);
  });

  app.get(CALLBACK_PATH, async (req, res, next) => {
    try {
      const params = client.callbackParams(req);
      const tokenSet = await client.callback(`${PUBLIC_URL}${CALLBACK_PATH}`, params, {
        code_verifier: req.session.codeVerifier,
      });
      req.session.tokenSet = tokenSet;
      const redirectTo = req.session.returnTo || '/';
      delete req.session.returnTo;
      res.redirect(redirectTo);
    } catch (error) {
      next(error);
    }
  });

  const ensureSession = (req, res, next) => {
    if (req.session.tokenSet) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    return res.redirect('/login');
  };

  const proxy = createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
    ws: true,
    xfwd: true,
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('x-forwarded-host', PUBLIC_URL.replace(/^https?:\//, ''));
    },
  });

  app.get('/healthz', (req, res) => res.send('ok'));

  app.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/'));
  });

  app.use((req, res, next) => {
    const publicPaths = new Set(['/login', CALLBACK_PATH, '/logout', '/healthz']);
    if (publicPaths.has(req.path)) {
      return next();
    }
    return ensureSession(req, res, next);
  });

  app.use('/', proxy);

  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).send('Authentication proxy error');
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Azure AD auth proxy listening on http://127.0.0.1:${PORT}`);
  });
})();

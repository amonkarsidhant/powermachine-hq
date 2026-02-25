# Powermachine HQ

Powermachine HQ: orchestrating autonomous agent squads, infrastructure, and ops for a multi-role organization powered by OpenClaw, Ollama, and Opencode.

This repository captures the early org design, tooling, and automation for the "Powermachine" initiative: an autonomous operations hub powered by OpenClaw, Ollama, Opencode, and the GitHub ecosystem.

## What's inside

- `ORG-CHART.md`: the org chart, reporting structure, and role/ritual guidance for your fleet of agents and engineers.
- `auth-proxy/`: a small Node.js Azure AD proxy that protects the OpenClaw Control UI, set up to run behind ngrok.
- `HEARTBEAT.md`, `SOUL.md`, and the OpenClaw onboarding files remain for continuity; they are part of how the assistant operates.

## Deployable tooling

- `auth-proxy/index.js`: Express + `openid-client` reverse proxy that enforces Azure AD login before forwarding to the Gateway.
- `auth-proxy/.env.example`: template for required environment variables (client ID, secret, tenant ID, proxy/public URL).
- `ngrok-dashboard.service` + `azure-auth-proxy.service` (defined in `/etc/systemd/system/`) keep the tunnel + proxy running.

## Next steps

1. Fill in `auth-proxy/.env` with real Azure AD credentials and secrets (already primary values are referenced in the running service but should be rotated if needed).
2. Keep token usage in check via the Control UI and the assistant.
3. Expand the org chart with skills/backlog entries once the rest of the fleet is defined.

Feel free to treat this repo as the source of truth for the powermachine's early setup, add issues for new agent squads, or extend it with automation scripts as needed.

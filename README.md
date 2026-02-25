# Powermachine HQ

Powermachine HQ: orchestrating autonomous agent squads, infrastructure, learning, and ops for a multi-role organization powered by OpenClaw, Ollama, and Opencode.

This repository captures the early org design, tooling, and automation for the "Powermachine" initiative: an autonomous operations hub powered by OpenClaw, Ollama, Opencode, and the GitHub ecosystem.

## What's inside

- `ORG-CHART.md`: the org chart, reporting structure, and role/ritual guidance for your fleet of agents and engineers.
- `auth-proxy/`: a small Node.js Azure AD proxy that protects the OpenClaw Control UI, set up to run behind ngrok.
- `SKILL-ROADMAP.md`: the next wave of OpenClaw playbook skills we will onboard for each squad.
- `HEARTBEAT.md`, `SOUL.md`, and the OpenClaw onboarding files remain for continuity; they are part of how the assistant operates.

## Deployable tooling

- `auth-proxy/index.js`: Express + `openid-client` reverse proxy that enforces Azure AD login before forwarding to the Gateway (now with Morgan + Prometheus metrics).
- `auth-proxy/.env.example`: template for required environment variables (client ID, secret, tenant ID, proxy/public URL).
- `ngrok-dashboard.service` + `azure-auth-proxy.service` (defined in `/etc/systemd/system/`) keep the tunnel + proxy running.

## Next steps

1. Fill in `auth-proxy/.env` with real Azure AD credentials and secrets (and rotate them regularly).<br>
2. Kick off the skills roadmap in `SKILL-ROADMAP.md`: install `clawrouter`, `search-cluster`, `node-red-manager`, `newman`, `system-architect`, `mema`/`mema-vault`, `yt-dlp`, and related tools so each squad can expand their skill stack.<br>
3. Keep token usage, learning sprints, and release readiness monitored via the Control UI, GitHub workflows, and the assistant’s dashboards.

Feel free to treat this repo as the source of truth for the powermachine’s early setup, add issues for new agent squads, or extend it with automation scripts as needed.

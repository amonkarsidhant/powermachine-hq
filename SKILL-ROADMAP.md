# Skills Roadmap — Powermachine HQ

This roadmap captures the set of OpenClaw playbook skills we will onboard next for the squads in PowerHQ. Each entry links a skill to the squad(s) that benefit, plus a concrete first action so we can activate it quickly.

| Skill | Squad(s) | First action | Notes |
| --- | --- | --- | --- |
| `clawrouter` | AI Architects / Circuit Sage | Run `npx playbooks add skill openclaw/skills/clawrouter` and document the routing policy for multi-model calls. | Use dashboards to report cost savings vs. previous routing. |
| `search-cluster` | Signal Steward & Compasswright | Install and configure the Redis cache + query template; use it in the sprint research workflow to feed summaries. | Tie into learning sprints to surface new signals automatically. |
| `node-red-manager` | Platform Engineering / Forge Watch | Add skill to orchestrate Node-RED flows used for observability alerts; proof out deployment script. | Keep runs in GitHub Actions for reproducible flow deployments. |
| `newman` | Release Tactician | Install the skill, wire it to the release workflow to run the collection that covers Control UI APIs, log outputs to `reports/release-checks.md`. | Trigger it automatically before each merge to `main`. |
| `yt-dlp` | Learning Ops / Compasswright | Use skill to fetch public videos (once we resolve the YouTube block), clean transcripts, and post them back into `LEARNING-SPRINTS.md`. | Default cleaning removes bracketed cues; keep option for timestamps. |
| `system-architect` | Forge Watch / Platform Architect | Run the skill as part of new infra proposals; capture diagram + docs for ngrok/proxy updates. | Store generated folder/diagram snapshots in `docs/infra-artefacts/`. |
| `mema-vault` | Forge Watch + Compasswright | Install and template secrets rotation for `auth-proxy/.env` (rotate ngrok/AD secrets). | Build checklist for rotating before each major launch. |
| `mema` | Executive Assistant + all squads | Use as the global memory stack so squad lessons stay accessible; connect to `COMPASSWRIGHT.md` onboarding. | Sync with `SM`-level memory (like heartbeat). |
| `file-organizer-skill` | Compasswright & Resilience Chorus | Automate organizing archived sprint assets + chaos experiment logs. | Keep `reports/` tidy and easy to audit. |
| `openclaw-whatsapp` | Product + QA (future) | Bookmark for when we need WhatsApp channel coverage; set aside for WhatsApp enablement once ready. | Keep config notes ready in `docs/channel-automation`. |

## Next steps

1. Install each skill via `npx playbooks add skill ...` (or stage them in `skills/` if we bring the repo in-house).<br>
2. Document the squad-level integration (event, trigger, artifact). Add checkboxes to `SKILLS-BACKLOG.md` for follow-through. <br>
3. Add automation (GitHub Actions or cron) that runs new skills for learning sprints, release gating, and infra updates so the powermachine stays responsive.<br>
4. Maintain `TRENDING-SKILLS.md` as a “living signal” list; update it whenever Playbooks highlights new trending skills so squads can keep learning the latest capabilities.

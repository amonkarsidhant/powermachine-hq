# Trending Skill Signals — Playbooks.com

The Playbooks trending page surfaces the skills receiving the most attention right now. These represent fresh capabilities we can pull into PowerHQ to improve research, automation, testing, and intelligence. The squads below are mapped to their natural owners and the first action so we can onboard them quickly.

| Skill | Description | Squad(s) | First action |
| --- | --- | --- | --- |
| `code-reviewer` (google-gemini/gemini-cli) | Guides professional reviews of local diffs or PRs. | Release Tactician, Circuit Sage | Run a review on the latest release PR and record findings/backlog items. |
| `frontend-design` (anthropics/skills) | Designs production-grade UI/UX prototypes from specs. | Compasswright, Signal Steward | Feed the sprint hypothesis into the skill to generate component ideas for the Platform team. |
| `searxng-local` (openclaw/skills) | Queries a self-hosted SearXNG instance for privacy-first research. | Signal Steward, Executive Assistant | Wire it into learning sprints so research notes fetch from SearXNG instead of public search. |
| `brainstorming` (everyinc/compound-engineering-plugin) | Runs structured brainstorming before major features. | Product Managers & Owners | Host a weekly brainstorm and archive the output in `signal-steward.md`. |
| `agent-browser` (vercel-labs/agent-browser) | Automates web navigation/form filling. | Platform Engineering, Forge Watch | Use it to validate Control UI forms or fetch metadata for agent stories. |
| `web-design-guidelines` (vercel-labs/agent-skills) | Reviews UI code against Web Interface Guidelines. | Developer Experience | Add to Compasswright’s review checklist and capture accessibility gaps. |
| `playwright-cli` (microsoft/playwright-cli) | Automates browser actions (forms, screenshots). | SRE / Release Tactician | Add to release checklist to smoke test Control UI flows after each merge. |
| `ralph` (snarktank/prd) | Drafts detailed PRDs from feature prompts. | Product Managers | Create a PRD for the next autonomous agent feature and link it to `signal-steward`. |
| `frontend-code-review` (langgenius/dify) | Reviews frontend diffs with quality/performance checklist. | QA / Release Tactician | Have the QA engineer run it on the latest UI change and store results. |
| `agent-development` (anthropics/claude-code) | Designs Claude Code plugins (structure + prompts). | Circuit Sage | Use to prototype new agent skill structure from the roadmap. |
| `playwright-dev` (microsoft/playwright) | Documents how to extend Playwright itself. | Release Tactician / DevEx | Build internal guideline for debugging Playwright flows used in CI. |
| `skill-creator` (openclaw/openclaw/skill-creator) | Designs and packages modular AgentSkills. | Executive Assistant | Train the developer experience squad on this skill and store templates in `SKILL-TEMPLATES.md`. |
| `memory-management` (anthropics/knowledge-work-plugins) | Turns shorthand into memory-aware context. | Executive Assistant / Compasswright | Route sprint key learnings through this skill to ensure continuity across sessions. |
| `claude-automation-recommender` (anthropics/claude-plugins-official) | Suggests automations/hooks for Claude Code setups. | Circuit Sage & Release Tactician | Run it on our repo to spot automation opportunities (Cron jobs, LUTs). |
| `chrome-devtools` (github/awesome-copilot) | Automates profiling and network analysis via DevTools. | Forge Watch / Resilience Chorus | Use it to baseline Control UI performance and feed logs into dashboards. |
| `test-coverage-improver` (openai/openai-agents-js) | Analyzes coverage and suggests high-impact tests. | QA / Release Tactician | Execute after each push to surface targeted tests and add them to the backlog. |
| `find-skills` (vercel-labs/skills) | Discovers/install relevant agent skills on demand. | Executive Assistant / Circuit Sage | Use during sprint planning to locate supporting capabilities automatically. |
| `continuous-learning-v2` (affaan-m/everything-claude-code) | Turns Claude Code insights into lasting skills. | Executive Assistant / Compasswright | Feed research summaries in so the subagent learns the distilled lessons. |
| `flowetic-app` (gracebotly/flowetic-app) | Manages persistent todo lists with multi-step reasoning. | Resilience Chorus / Product | Replace manual todo notes with this skill’s structured tracker. |
| `openclaw-whatsapp` | Bridges OpenClaw to WhatsApp messaging. | Product, QA (future) | Keep for later channel expansion; document config notes in `docs/channel-automation`. |

## Next steps

1. Install the first 10 trending skills via `npx playbooks add skill ...` and note their integration in `SKILL-ROADMAP.md`.<br>
2. Create GitHub issues for each squad’s first action so we can close the loop with deliverables.<br>
3. Automate metadata capture: each skill run logs to `reports/skill-usage.md` and surfaces in the Control UI for accountability.

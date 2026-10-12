# AI-assisted Shopify development setup

Setup branch: `chore/shopify-ai-setup`.

The storefront repository was empty when this setup began. No production theme,
base theme, Shopify CLI, package dependencies, companion skills, or storefront
assets have been installed. The skill's bundled examples and skeleton remain
inside its skill directory as inactive resources.

## Installed skill

- Source: https://github.com/moVictor99/shopify-theme-builder
- Pinned source commit: `2f42022087800de8664e73fd96091986ff6a9e59`
- Location: `.agents/skills/shopify-theme-builder/`
- Copied unchanged: `SKILL.md`, `README.md`, `LICENSE`, `references/`,
  `scripts/`, `examples/`, and `assets/`.
- Licence: MIT; copyright and permission notice are retained in `LICENSE`.
- Upstream Git metadata, agent adapters, and Claude installers were not copied.
  The project uses its own root `AGENTS.md` rather than adopting upstream rules.

Codex's repo-local discovery path is `.agents/skills/<skill-name>/SKILL.md`.
The installed file declares `name: shopify-theme-builder` and a nonempty
description in YAML frontmatter. Its relative references are retained.
Discoverability does not activate its scaffolding phases. Refresh or start a
new Codex session in this checkout if its catalog was loaded before installation.

Verified with Codex CLI `0.159.2` using the app-server `skills/list` method
with this repository as its working directory and `forceReload: true`.
It returned `shopify-theme-builder` with `scope: repo`, `enabled: true`,
the installed `SKILL.md` path, and no parsing errors. The diagnostic process
used isolated temporary runtime state because the cloud machine's normal Codex
runtime directory is read-only; no model session or skill workflow was started.
All 78 copied payload files also matched the pinned source byte-for-byte.

## Reference material

No reference repository or Git submodule is included. The previously proposed
sections library was removed at the user's request because its contents have
mixed licensing. Its checkout, Git submodule registration, `.gitmodules`, and
cached submodule metadata have been removed from this project. It must not be
reintroduced or imported without an explicit request and a licence review.

## Security and licensing review

This is a limited source inspection, not a complete security audit.

- The installed skill is MIT-licensed. Its complete `LICENSE` file is retained;
  preserve the copyright and permission notice in copies or substantial portions.
- The builder contains broad workflow instructions, scaffold-copying phases,
  companion-skill references, and cleanup guidance. They are optional third-party
  guidance and do not override the current scope or the project's rules. Its
  technical claims have not been certified against current Shopify documentation.
- No upstream installers or reference scripts were executed. No store access,
  credentials, deployment, or production modification is needed for this setup.

Stop at setup and wait for explicit approval before storefront development.

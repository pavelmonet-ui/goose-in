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

## Reference submodule

- Source: https://github.com/Ergasti/shopify-sections
- Location: `references/shopify-sections/`
- Pinned commit: `debf10d7a28524d5fb1c80b08e60b5d04e458438`
- `.gitmodules` records the source; the parent Git index records the exact commit.

To initialize this reference checkout in a future clone, run from the repository root:

```sh
git submodule update --init -- references/shopify-sections
git submodule status -- references/shopify-sections
```

Do not use `--remote`: reference updates require an explicit request and review.
Do not copy library sections into theme directories without explicit approval.

## Security and licensing review

This is a limited source inspection, not a complete security audit.

- The sections repository's root licence is MIT, but its README explicitly says
  individual sources may have different licences. Multiple Section Lab folders
  describe paid material as "internal use only" and "Do not redistribute."
  Public availability does not establish reuse rights. Check the relevant
  purchase terms, original source, and attribution before any future import.
- Some sections load external CDN scripts (including Swiper), call cart APIs,
  or insert HTML with `innerHTML`. Review versions, script integrity, data
  escaping, privacy, accessibility, and performance before adaptation. Shipping
  API tools are also present; do not run them or provide credentials during setup.
- The builder contains broad workflow instructions, scaffold-copying phases,
  companion-skill references, and cleanup guidance. They are optional third-party
  guidance and do not override the current scope or the project's rules. Its
  technical claims have not been certified against current Shopify documentation.
- No upstream installers or reference scripts were executed. No store access,
  credentials, deployment, or production modification is needed for this setup.

Stop at setup and wait for explicit approval before storefront development.

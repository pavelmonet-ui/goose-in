Goose in Shoes — homepage implementation

The working branch was fast-forwarded from `6267314` to `origin/main` at
`bc67d52`, bringing in the four supplied reference files. All six PDF reference
pages, the primary logo and the handwritten slogan were inspected. The reference
files were not changed. Implementation changes remain in the working tree.

Built a native Shopify Online Store 2.0 homepage with a slim announcement bar,
minimal Shop / Our story / Bag header, supplied handwritten hero artwork, an
editorial four-model presentation, craftsmanship, everyday moments, gifting,
sizing/care/delivery/returns disclosures and the supplied goose in the footer.
The colour palette, typography, imagery, text, product selection, links and
section visibility are merchant-editable. Product and policy details stay
provisional until supplied. Mobile uses large single-column product imagery.

The source artwork is preserved byte-for-byte. CSS frames the original wordmark
and handwritten slogan; neither has been generated or redrawn. The small generic
slipper outline is a labelled placeholder, not a final product design.

Experimental starter block/partial rendering was removed. The homepage now uses
JSON, standard sections and section blocks. The other starter page templates only
received a container-wrapper compatibility change; final product detail page
design and Shopify checkout remain outside the implementation.

**Validation**

- Shopify CLI 4.9.4: `shopify theme check --fail-level warning` passed.
- 37 files inspected by Theme Check; no errors or warnings.
- All seven theme JSON files parsed successfully, including Shopify header comments.
- `node --check assets/editorial.js` and `git diff --check` passed.
- Chromium local rendering at widths 320, 390, 768 and 1440: no horizontal overflow
  or JavaScript errors; no automated WCAG A/AA violations reported by axe-core.
- Checked navigation anchors, keyboard skip link, keyboard disclosures, scroll
  reveals, reduced motion, no-JavaScript browsing, Theme Editor section reload and
  block selection events, product URLs/prices and responsive hero image selection.
- Shopify CLI theme packaging passed. `goose-in-shoes-homepage.zip` was checked
  for archive integrity and byte-for-byte agreement with the current theme source.
  Repository instructions were removed from the ZIP and the original MIT licence
  was included. No store was connected and nothing was published.

Browser checks used locally rendered Liquid with schema defaults, mock Shopify
objects and system font substitutes. They establish local layout and interaction
behaviour; store-backed Theme Editor and Shopify font rendering still need to be
checked in the Shopify preview. The temporary validation tools and screenshots
are under `/workspace/work/`; they are not theme dependencies.

**Preview in Shopify Admin**

1. Use `goose-in-shoes-homepage.zip` in the repository root.
2. Open **Online Store → Themes → Add theme → Upload zip file** in Shopify Admin.
3. Upload it as an unpublished theme, then choose **Preview** or **Customize**.
4. In **Customize → Home page → The four models**, select your four products.
   Their real names, prices, availability and links then appear automatically.
5. Replace the image placeholders and short model notes, and add verified sizing,
   care, delivery and returns information.

Alternatively, from the repository with Shopify CLI installed:

```sh
shopify theme dev --store YOUR-STORE.myshopify.com
```

Authenticate when prompted and open the preview URL printed by Shopify CLI.
For the temporary CLI installed in this workspace, the executable is
`/workspace/work/shopify-tools/node_modules/.bin/shopify`.
The repository README includes the full Theme Editor guide.

**Exact implementation file list**

Paths below are relative to `/workspace/goose-in`. The source references pulled
from `origin/main` are listed separately and are not implementation edits.

**Created: 21 files**

- `HOMEPAGE_IMPLEMENTATION.md`
- `assets/editorial.js`
- `assets/goose-brand-original.png`
- `assets/goose-slogan-original.jpg`
- `sections/announcement-bar.liquid`
- `sections/craftsmanship.liquid`
- `sections/editorial-hero.liquid`
- `sections/editorial-products.liquid`
- `sections/footer-group.json`
- `sections/footer.liquid`
- `sections/gifting.liquid`
- `sections/header-group.json`
- `sections/header.liquid`
- `sections/lifestyle.liquid`
- `sections/purchase-reassurance.liquid`
- `snippets/brand-artwork.liquid`
- `snippets/editorial-media.liquid`
- `snippets/editorial-product.liquid`
- `snippets/icon-arrow.liquid`
- `snippets/slipper-placeholder.liquid`
- `templates/index.json`

**Modified: 18 files**

- `.shopifyignore`
- `AGENTS.md`
- `README.md`
- `assets/base.css`
- `config/settings_schema.json`
- `layout/theme.liquid`
- `locales/en.default.json`
- `snippets/css-variables.liquid`
- `templates/404.liquid`
- `templates/article.liquid`
- `templates/blog.liquid`
- `templates/cart.liquid`
- `templates/collection.liquid`
- `templates/list-collections.liquid`
- `templates/page.liquid`
- `templates/password.liquid`
- `templates/product.liquid`
- `templates/search.liquid`

**Removed: 7 files**

- `assets/liquid-tips.js`
- `blocks/container.liquid`
- `blocks/footer.liquid`
- `blocks/header.liquid`
- `blocks/hello-world.liquid`
- `blocks/liquid-tips.liquid`
- `templates/index.liquid`

**Existing reference files brought in from origin/main**

- `references/README.md`
- `references/main logo.png`
- `references/phrase.JPG`
- `references/references 2.pdf`

**Generated archive (ignored by Git)**

- `goose-in-shoes-homepage.zip` — native Shopify theme, including original MIT licence.

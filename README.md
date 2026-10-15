# Goose in Shoes

A native Shopify Online Store 2.0 theme for the Goose in Shoes homepage. Liquid,
JSON templates, reorderable sections, section blocks, snippets, CSS and a small
vanilla JavaScript enhancement. No build step or application framework.

The design uses the supplied brand artwork unchanged, warm cream, blue ink,
muted image fields and a spacious editorial presentation of four slipper models.
The artwork is framed with CSS to show its original wordmark and handwriting;
the original full goose illustration closes the footer. `references/` remains
unchanged. The MIT licence for the original Shopify Skeleton baseline is retained.

## Preview in Shopify

Install the current [Shopify CLI](https://shopify.dev/docs/api/shopify-cli), then
run from this repository:

```sh
shopify theme dev --store YOUR-STORE.myshopify.com
```

Authenticate with an account that has access to the store. Open the preview URL
printed by the CLI. This uses a development theme, not the published theme.
A store connection is required to render real products, prices, Shopify fonts,
cart data and the Theme Editor. No store has been connected or published by this
implementation task.

Alternatively, create an uploadable theme ZIP:

```sh
shopify theme package
```

In Shopify Admin, open **Online Store → Themes → Add theme → Upload zip file**.
Upload the ZIP, then use **Preview** or **Customize** on the unpublished theme.
The packaged `goose-in-shoes-homepage.zip` contains deployable theme files and the original MIT
licence; it excludes source references, tooling and the optional development
skill. Retain `LICENSE.md` when redistributing the original theme code.

## Edit the homepage

Open **Customize → Home page**. Every homepage section can be hidden, reordered
or removed using Shopify's native controls. Sections are limited to one instance
because the Shop and Our story navigation target their stable homepage anchors.

- **Header group:** edit the slim announcement, logo override, brand name,
  Shop / Our story labels and optional destination links. Bag uses Shopify's
  cart route and live item count. Empty Shop / Our story URLs point to the
  homepage's collection and craftsmanship sections respectively.
- **Editorial hero:** replace desktop and optional mobile photographs, set the
  short copy and shopping link, or upload a replacement handwritten image.
  The supplied handwriting is shown by default. Its accessible heading is editable;
  keep it consistent with the artwork when replacing either one.
- **The four models:** select one real Shopify product in each of four Model
  blocks. Product title, price, availability and URL come from Shopify Admin.
  Each block has a short editorial line, photo override, optional hover image
  and background colour choice. The short line should be replaced with an
  approved distinguishing detail. Unassigned slots use `Model 01`–`Model 04`,
  a provisional generic outline and a placeholder caption; they have no invented
  prices or nonfunctional shopping links. Assign products to activate shopping.
- **Craftsmanship:** set two close-up photographs and short verified material
  or construction details. No material, manufacturing or origin claims are assumed.
- **The moments in between:** edit the lifestyle photo and short moment blocks.
- **A thoughtful gift:** set the photograph, message, recipient lines and link.
- **The useful details:** edit sizing, care, delivery and returns blocks. Each
  supports rich text, existing Shopify page content and a link. Empty blocks
  explicitly display a placeholder instead of inventing policies.
- **Footer group:** edit the closing message, menu, contact link, goose artwork
  and copyright name. Published Shopify policies can be displayed automatically.
- **Theme settings:** change colours, heading/body fonts, width, margins and
  scroll reveals. Artwork with baked-in colours retains its original colours.

Uploaded editorial images use Shopify's responsive image CDN and image focal
points. Use image alt text in Shopify Files/product media. Hero images load eagerly;
other photography loads lazily. An optional mobile hero image uses `<picture>`
so the browser selects the appropriate source.

## Scope and compatibility

Only the homepage and shared header/footer are designed. Other starter templates
retain their existing content and basic behaviour. Their experimental `block`
wrapper tags were replaced with ordinary HTML so they can render on standard
Shopify stores. Final product detail pages are intentionally not designed yet.
No checkout code was changed.

Homepage blocks are native **section blocks**, declared in section schemas and
saved in `templates/index.json`; no experimental `{% block %}` or `{% partial %}`
syntax is required. Header and footer use standard section groups.

The placeholder slipper outline is a generic layout illustration, not a final
model design. Photography, product selection, distinguishing lines and verified
policy information must be supplied before this theme is used for sales.

## Validation

```sh
shopify theme check --fail-level warning
node --check assets/editorial.js
git diff --check
```

Implementation validation also used local rendering of the actual Liquid sections
with schema defaults, Chromium checks at 320 / 390 / 768 / 1440 pixels, automated
WCAG A/AA checks, product/image fixtures, keyboard navigation, reduced motion,
Theme Editor event handling and no-JavaScript browsing. Local fixtures use system
font substitutes and mock Shopify objects; Shopify preview remains the final check
for platform rendering and store-specific configuration.

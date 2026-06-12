# True Vet Value — VA buying-power widget

An embeddable lead-generation calculator for veteran home-buyers. A veteran
enters their income, sees their **grossed-up qualifying income** update live, and
unlocks an **estimated home price** by entering their name, email, current VA
rating, and number of dependents — which is captured as a qualified lead.

**Live demo:** https://shepdesign.github.io/tvv-widget-preview/

---

## What it does

- **Value first.** The grossed-up monthly income recalculates as you type — no
  button, no wait.
- **Gated payoff.** The buying-power figure is revealed in exchange for contact
  details, so every reveal is a lead.
- **Richer leads.** Captures VA disability rating and dependents alongside
  name/email and the income figures.
- **Self-contained.** One `<script>` tag, rendered inside Shadow DOM so it never
  collides with the host theme's CSS. No jQuery, no framework, no build step.
- **Two layouts.** Inline (drops into a page) or a floating popup launcher.

## Embed it (any site)

### Inline — a calculator placed on a page

```html
<div data-tvv-mount></div>
<script src="https://shepdesign.github.io/tvv-widget-preview/tvv.js"></script>
```

The script renders into the `data-tvv-mount` element. If you omit that element,
the widget mounts immediately after the `<script>` tag.

### Popup — a floating "Estimate your VA buying power" button, site-wide

```html
<script src="https://shepdesign.github.io/tvv-widget-preview/tvv.js"
        data-tvv-mode="popup"></script>
```

> For production, host `tvv.js` on your own branded CDN (e.g.
> `cdn.truevetvalue.com/tvv.js`) rather than the demo URL above.

## Embed it on WordPress

**Inline, on one page (Gutenberg):**

1. Edit the page → add a **Custom HTML** block.
2. Paste the inline snippet above.
3. Update/publish. The calculator appears where the block is.

**Inline, on one page (Classic editor / Elementor):** use an **HTML** widget/element
and paste the same snippet.

**Popup, site-wide:** install a headers/footers plugin such as **WPCode** or
**Insert Headers and Footers**, then paste the popup snippet into the **Footer**
section. It loads on every page.

No plugin file uploads are required — it's just a script tag.

## Configuration

Set these as attributes on the `<script>` tag (inline mode reads them from the
mounting script; all are optional):

| Attribute             | Purpose                                   | Default |
| --------------------- | ----------------------------------------- | ------- |
| `data-tvv-mode`       | `popup` for the floating launcher         | inline  |
| `data-function-url`   | Lead endpoint override                    | baked production endpoint |
| `data-gross-up-rate`  | Non-taxable income gross-up               | `0.25` (125%) |
| `data-dti-cap`        | Debt-to-income cap                        | `0.41`  |
| `data-interest-rate`  | Annual rate for the buying-power estimate | `0.065` |
| `data-term-years`     | Loan term in years                        | `30`    |

Example — a 115% gross-up and a 25-year term:

```html
<script src="https://cdn.truevetvalue.com/tvv.js"
        data-gross-up-rate="0.15" data-term-years="25"></script>
```

## Leads & privacy

Submissions POST to the configured endpoint (a Supabase Edge Function) and are
stored server-side; leads are reviewed privately. The form carries a hidden
honeypot and the backend rate-limits by hashed IP — the raw IP is never stored.
No credit pull, no SSN. The compliance disclaimer is built into the widget and
ships on every embed.

## Repo contents

| File         | What it is                                              |
| ------------ | ------------------------------------------------------- |
| `index.html` | The live demo page (lead submission is stubbed here).   |
| `tvv.js`     | The production widget bundle — this is what you embed.  |

The widget source lives in the private `true-vet-value` project; `tvv.js` here is
the compiled, ready-to-embed build.

---

© shepdesign LLC. All rights reserved.

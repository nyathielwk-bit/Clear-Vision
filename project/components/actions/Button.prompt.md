A call-to-action button in Clearframe's premium, trustworthy style — navy by default, with a warm-gold `accent` variant reserved for the single most important conversion CTA.

```jsx
<Button variant="primary">Get a quote</Button>
<Button variant="accent" size="lg">Book a free call</Button>
<Button variant="secondary">See packages</Button>
<Button variant="link" trailingIcon={<span>&rarr;</span>}>View all services</Button>
```

Variants: `primary` (navy — default action), `accent` (warm gold — the one hero/final CTA), `secondary` (outline), `ghost` (quiet), `inverse` (on dark sections), `link` (underlined text link). Sizes: `sm` / `md` / `lg`. Pass `block` to fill width, `leadingIcon` / `trailingIcon` for icons, and `as="a"` with `href` to render an anchor. Use **one** `accent` button per view so it stays the clear primary action.

An icon-only button for toolbars, cards, and nav — always pass a `label` for accessibility.

```jsx
<IconButton label="Save to collection" variant="outline">
  <svg>…</svg>
</IconButton>
<IconButton label="Add to bag" variant="solid" round />
```

Variants: `ghost` (default), `outline`, `solid` (sienna). Sizes `sm`/`md`/`lg`. Pass `round` for a circular shape. Children should be a 1.25em icon (Lucide SVG recommended).

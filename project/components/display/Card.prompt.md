A paper surface for grouped content — articles, products, callouts — with optional cover image, eyebrow, Playfair title, meta and footer slots.

```jsx
<Card
  image="/cover.jpg"
  eyebrow="In the Journal"
  title="The quiet luxury of things made well"
  meta="By the Editors · 6 min read"
  interactive
/>

<Card tone="inverse" title="Become a member">
  <p>Four issues a year, delivered.</p>
</Card>
```

Slots: `image`, `eyebrow`, `title`, `meta`, `footer`, plus free `children` in the body. `tone`: `default` / `raised` / `inverse`. `interactive` adds a hover lift; `flat` removes the shadow.

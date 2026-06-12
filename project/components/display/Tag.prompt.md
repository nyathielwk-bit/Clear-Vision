A rounded pill for categories, filters and topics — can be a link or removable chip.

```jsx
<Tag href="/journal/food">Food &amp; Drink</Tag>
<Tag tone="accent">Slow Living</Tag>
<Tag onRemove={() => remove(id)}>Ceramics</Tag>
```

`tone`: default / accent / brass. Pass `href` to render a link, or `onRemove` to show a × button (filter chips).

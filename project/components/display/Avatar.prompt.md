A circular avatar showing a photo or initials (in Playfair). Falls back to initials from `name`.

```jsx
<Avatar src="/editor.jpg" name="Mara Devlin" size="lg" />
<Avatar name="Jon Hale" />          {/* shows "JH" */}
<Avatar name="A" ring size="xl" />
```

`size`: xs / sm / md / lg / xl. `ring` adds a brass ring; `square` makes it a rounded square. For stacks, wrap several in a `<span class="au-avatar-group">`.

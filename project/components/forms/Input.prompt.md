A labelled text input with optional hint, error, leading icon and "Optional" tag — the base form field.

```jsx
<Input label="Email address" type="email" placeholder="you@example.com"
       hint="We'll only write when a new issue lands." />
<Input label="Search the shop" leadingIcon={<svg/>} />
<Input label="Full name" error="Please tell us your name." />
```

Pass any native `<input>` attribute (`type`, `value`, `onChange`, `disabled`…). Set `error` to switch to the error state, `optional` to show the tag, `leadingIcon` for an inset icon.

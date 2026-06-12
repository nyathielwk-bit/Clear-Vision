import React from "react";

const INPUT_CSS = `
.au-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-sans); }
.au-field__label { font: var(--type-label); color: var(--text-heading); display: flex; gap: 6px; align-items: baseline; }
.au-field__opt { font-size: var(--text-xs); color: var(--text-subtle); font-weight: var(--weight-regular); }
.au-field__hint { font: var(--type-caption); color: var(--text-muted); }
.au-field__hint--error { color: var(--danger-fg); }

.au-input {
  font-family: var(--font-sans); font-size: var(--text-base); color: var(--text-body);
  background: var(--surface-card);
  border: var(--border-hairline) solid var(--border-strong);
  border-radius: var(--radius-sm);
  padding: 0.62em 0.85em; width: 100%;
  transition: border-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard),
              background var(--duration-fast) var(--ease-standard);
}
.au-input::placeholder { color: var(--text-subtle); }
.au-input:hover { border-color: var(--stone-400); }
.au-input:focus { outline: none; border-color: var(--primary); box-shadow: var(--ring); }
.au-input:disabled { background: var(--stone-100); color: var(--text-subtle); cursor: not-allowed; }
.au-input--error { border-color: var(--danger-fg); }
.au-input--error:focus { box-shadow: 0 0 0 3px color-mix(in srgb, var(--danger-fg) 26%, transparent); }

.au-field__wrap { position: relative; display: flex; align-items: center; }
.au-field__wrap .au-input { padding-left: 2.4em; }
.au-field__icon { position: absolute; left: 0.85em; color: var(--text-subtle); display: grid; place-items: center; pointer-events: none; }
.au-field__icon svg { width: 1.05em; height: 1.05em; }
`;

function ensureInputStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-input-styles")) return;
  const el = document.createElement("style");
  el.id = "au-input-styles";
  el.textContent = INPUT_CSS;
  document.head.appendChild(el);
}

/**
 * Aurelia Input — labelled text field with hint / error states.
 */
export function Input({
  label,
  hint,
  error,
  optional = false,
  leadingIcon = null,
  id,
  className = "",
  ...rest
}) {
  ensureInputStyles();
  const fieldId = id || `au-input-${Math.random().toString(36).slice(2, 8)}`;
  const inputEl = (
    <input
      id={fieldId}
      className={["au-input", error ? "au-input--error" : "", className].filter(Boolean).join(" ")}
      aria-invalid={error ? "true" : undefined}
      {...rest}
    />
  );
  return (
    <div className="au-field">
      {label ? (
        <label className="au-field__label" htmlFor={fieldId}>
          {label}
          {optional ? <span className="au-field__opt">Optional</span> : null}
        </label>
      ) : null}
      {leadingIcon ? (
        <div className="au-field__wrap">
          <span className="au-field__icon" aria-hidden="true">{leadingIcon}</span>
          {inputEl}
        </div>
      ) : inputEl}
      {error ? (
        <span className="au-field__hint au-field__hint--error">{error}</span>
      ) : hint ? (
        <span className="au-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}

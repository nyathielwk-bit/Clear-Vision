import React from "react";

const CHECKBOX_CSS = `
.au-check { display: inline-flex; gap: 0.6em; align-items: flex-start; cursor: pointer; font-family: var(--font-sans); color: var(--text-body); }
.au-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.au-check__box {
  flex: none; width: 20px; height: 20px; margin-top: 1px;
  border: var(--border-hairline) solid var(--border-strong);
  border-radius: var(--radius-xs); background: var(--surface-card);
  display: grid; place-items: center; color: transparent;
  transition: background var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard);
}
.au-check__box svg { width: 13px; height: 13px; }
.au-check:hover .au-check__box { border-color: var(--stone-400); }
.au-check input:checked + .au-check__box { background: var(--primary); border-color: var(--primary); color: #FFFFFF; }
.au-check input:focus-visible + .au-check__box { box-shadow: var(--ring); }
.au-check input:disabled + .au-check__box { background: var(--stone-100); border-color: var(--border-default); }
.au-check--disabled { opacity: 0.5; cursor: not-allowed; }
.au-check__text { font-size: var(--text-sm); line-height: 1.35; }
.au-check__text small { display: block; color: var(--text-muted); font-size: var(--text-xs); margin-top: 1px; }
`;

function ensureCheckboxStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-checkbox-styles")) return;
  const el = document.createElement("style");
  el.id = "au-checkbox-styles";
  el.textContent = CHECKBOX_CSS;
  document.head.appendChild(el);
}

const CheckMark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/**
 * Aurelia Checkbox — a labelled checkbox with optional description.
 */
export function Checkbox({ label, description, disabled = false, className = "", ...rest }) {
  ensureCheckboxStyles();
  return (
    <label className={["au-check", disabled ? "au-check--disabled" : "", className].filter(Boolean).join(" ")}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="au-check__box" aria-hidden="true"><CheckMark /></span>
      {(label || description) ? (
        <span className="au-check__text">
          {label}
          {description ? <small>{description}</small> : null}
        </span>
      ) : null}
    </label>
  );
}

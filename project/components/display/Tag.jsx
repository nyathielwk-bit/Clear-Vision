import React from "react";

const TAG_CSS = `
.au-tag {
  display: inline-flex; align-items: center; gap: 0.45em;
  font-family: var(--font-sans); font-size: var(--text-xs); font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide); color: var(--text-body);
  background: var(--surface-card);
  border: var(--border-hairline) solid var(--border-strong);
  border-radius: var(--radius-pill);
  padding: 0.4em 0.8em; line-height: 1; white-space: nowrap;
  transition: border-color var(--duration-fast) var(--ease-standard),
              background var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard);
}
.au-tag--accent { color: var(--sienna-600); border-color: var(--sienna-200); background: var(--sienna-50); }
.au-tag--brass  { color: var(--brass-600); border-color: var(--brass-200); background: var(--brass-100); }
a.au-tag, button.au-tag { cursor: pointer; }
a.au-tag:hover, button.au-tag:hover { border-color: var(--stone-400); background: var(--stone-100); color: var(--text-heading); text-decoration: none; }
.au-tag__remove {
  display: inline-grid; place-items: center; width: 14px; height: 14px;
  margin-right: -0.2em; border: none; background: transparent; color: inherit;
  cursor: pointer; border-radius: 50%; opacity: 0.6;
}
.au-tag__remove:hover { opacity: 1; background: color-mix(in srgb, currentColor 16%, transparent); }
.au-tag__remove svg { width: 10px; height: 10px; }
`;

function ensureTagStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-tag-styles")) return;
  const el = document.createElement("style");
  el.id = "au-tag-styles";
  el.textContent = TAG_CSS;
  document.head.appendChild(el);
}

const Xmark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/**
 * Aurelia Tag — a pill for categories / filters; optionally a link or removable.
 */
export function Tag({ children, tone = "default", href, onRemove, className = "", ...rest }) {
  ensureTagStyles();
  const classes = ["au-tag", tone !== "default" ? `au-tag--${tone}` : "", className].filter(Boolean).join(" ");
  const content = (
    <>
      {children}
      {onRemove ? (
        <button type="button" className="au-tag__remove" aria-label="Remove" onClick={onRemove}>
          <Xmark />
        </button>
      ) : null}
    </>
  );
  if (href) {
    return <a className={classes} href={href} {...rest}>{content}</a>;
  }
  return <span className={classes} {...rest}>{content}</span>;
}

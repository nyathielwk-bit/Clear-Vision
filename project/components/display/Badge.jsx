import React from "react";

const BADGE_CSS = `
.au-badge {
  display: inline-flex; align-items: center; gap: 0.4em;
  font-family: var(--font-sans); font-weight: var(--weight-medium);
  font-size: var(--text-xs); line-height: 1; letter-spacing: 0.01em;
  padding: 0.42em 0.66em; border-radius: var(--radius-sm);
  border: var(--border-hairline) solid transparent; white-space: nowrap;
}
.au-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

/* soft (default) */
.au-badge--neutral { background: var(--stone-100); color: var(--stone-700); }
.au-badge--accent  { background: var(--sienna-50); color: var(--sienna-600); }
.au-badge--brass   { background: var(--brass-100); color: var(--brass-600); }
.au-badge--success { background: var(--success-bg); color: var(--success-fg); }
.au-badge--warning { background: var(--warning-bg); color: var(--warning-fg); }
.au-badge--danger  { background: var(--danger-bg); color: var(--danger-fg); }
.au-badge--info    { background: var(--info-bg); color: var(--info-fg); }

/* solid */
.au-badge--solid.au-badge--neutral { background: var(--stone-800); color: var(--stone-50); }
.au-badge--solid.au-badge--accent  { background: var(--accent); color: var(--navy-900); }
.au-badge--solid.au-badge--brass   { background: var(--brass-500); color: #fff; }
.au-badge--solid.au-badge--success { background: var(--sage-500); color: #fff; }
.au-badge--solid.au-badge--danger  { background: var(--brick-500); color: #fff; }

/* outline */
.au-badge--outline { background: transparent; border-color: currentColor; }
.au-badge--outline.au-badge--neutral { color: var(--stone-600); border-color: var(--border-strong); }
`;

function ensureBadgeStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-badge-styles")) return;
  const el = document.createElement("style");
  el.id = "au-badge-styles";
  el.textContent = BADGE_CSS;
  document.head.appendChild(el);
}

/**
 * Aurelia Badge — a small status / metadata pill.
 */
export function Badge({ children, tone = "neutral", variant = "soft", dot = false, className = "", ...rest }) {
  ensureBadgeStyles();
  const classes = [
    "au-badge",
    `au-badge--${tone}`,
    variant !== "soft" ? `au-badge--${variant}` : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {dot ? <span className="au-badge__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}

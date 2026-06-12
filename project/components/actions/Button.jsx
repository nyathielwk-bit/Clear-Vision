import React from "react";

const BUTTON_CSS = `
.au-btn {
  --_bg: var(--primary);
  --_fg: #FFFFFF;
  --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.55em;
  font-family: var(--font-sans); font-weight: var(--weight-medium);
  letter-spacing: 0.005em; white-space: nowrap; text-decoration: none;
  border: var(--border-hairline) solid var(--_bd);
  background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-md); cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}
.au-btn:focus-visible { outline: none; box-shadow: var(--ring); }
.au-btn:active { transform: translateY(0.5px) scale(0.992); }
.au-btn[disabled], .au-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; }

.au-btn--sm { font-size: var(--text-sm); padding: 0.42em 0.9em; min-height: 32px; }
.au-btn--md { font-size: var(--text-sm); padding: 0.62em 1.15em; min-height: 40px; }
.au-btn--lg { font-size: var(--text-base); padding: 0.8em 1.5em; min-height: 48px; }

.au-btn--primary { --_bg: var(--primary); --_fg: #FFFFFF; }
.au-btn--primary:hover { --_bg: var(--primary-hover); }
.au-btn--primary:active { --_bg: var(--primary-press); }

.au-btn--accent { --_bg: var(--accent); --_fg: var(--navy-900); font-weight: var(--weight-semibold); }
.au-btn--accent:hover { --_bg: var(--accent-hover); }
.au-btn--accent:active { --_bg: var(--gold-700); }

.au-btn--secondary { --_bg: transparent; --_fg: var(--text-heading); --_bd: var(--border-strong); }
.au-btn--secondary:hover { --_bg: var(--stone-100); --_bd: var(--stone-400); }

.au-btn--ghost { --_bg: transparent; --_fg: var(--text-body); --_bd: transparent; }
.au-btn--ghost:hover { --_bg: var(--stone-100); }

.au-btn--inverse { --_bg: var(--stone-900); --_fg: var(--stone-50); }
.au-btn--inverse:hover { --_bg: var(--stone-800); }

.au-btn--link {
  --_bg: transparent; --_fg: var(--primary); --_bd: transparent;
  padding-left: 0; padding-right: 0; min-height: 0; border-radius: 0;
  font-family: var(--font-sans); font-weight: var(--weight-semibold);
  text-underline-offset: 0.22em; text-decoration: underline; text-decoration-thickness: 1.5px;
  text-decoration-color: var(--gold-500);
}
.au-btn--link:hover { --_fg: var(--primary-hover); text-decoration-color: var(--primary-hover); }
.au-btn--block { width: 100%; }
`;

function ensureButtonStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-button-styles")) return;
  const el = document.createElement("style");
  el.id = "au-button-styles";
  el.textContent = BUTTON_CSS;
  document.head.appendChild(el);
}

/**
 * Aurelia Button — the primary call-to-action primitive.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  leadingIcon = null,
  trailingIcon = null,
  as = "button",
  className = "",
  ...rest
}) {
  ensureButtonStyles();
  const Tag = as;
  const classes = [
    "au-btn",
    `au-btn--${variant}`,
    variant !== "link" ? `au-btn--${size}` : "",
    block ? "au-btn--block" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <Tag className={classes} {...rest}>
      {leadingIcon ? <span className="au-btn__icon" aria-hidden="true">{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span className="au-btn__icon" aria-hidden="true">{trailingIcon}</span> : null}
    </Tag>
  );
}

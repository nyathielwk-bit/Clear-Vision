import React from "react";

const ICONBUTTON_CSS = `
.au-iconbtn {
  --_bg: transparent; --_fg: var(--text-body); --_bd: transparent;
  display: inline-grid; place-items: center; cursor: pointer;
  border: var(--border-hairline) solid var(--_bd);
  background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-sm);
  transition: background var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}
.au-iconbtn:focus-visible { outline: none; box-shadow: var(--ring); }
.au-iconbtn:active { transform: scale(0.94); }
.au-iconbtn[disabled] { opacity: 0.4; pointer-events: none; }
.au-iconbtn svg { width: 1.25em; height: 1.25em; display: block; }

.au-iconbtn--sm { width: 32px; height: 32px; font-size: 14px; }
.au-iconbtn--md { width: 40px; height: 40px; font-size: 16px; }
.au-iconbtn--lg { width: 48px; height: 48px; font-size: 19px; }

.au-iconbtn--ghost:hover { --_bg: var(--stone-100); }
.au-iconbtn--outline { --_bd: var(--border-strong); }
.au-iconbtn--outline:hover { --_bg: var(--stone-100); --_bd: var(--stone-400); }
.au-iconbtn--solid { --_bg: var(--primary); --_fg: #FFFFFF; }
.au-iconbtn--solid:hover { --_bg: var(--primary-hover); }
.au-iconbtn--round { border-radius: var(--radius-pill); }
`;

function ensureIconButtonStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-iconbutton-styles")) return;
  const el = document.createElement("style");
  el.id = "au-iconbutton-styles";
  el.textContent = ICONBUTTON_CSS;
  document.head.appendChild(el);
}

/**
 * Aurelia IconButton — a square/round button holding a single icon.
 */
export function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  round = false,
  className = "",
  ...rest
}) {
  ensureIconButtonStyles();
  const classes = [
    "au-iconbtn",
    `au-iconbtn--${variant}`,
    `au-iconbtn--${size}`,
    round ? "au-iconbtn--round" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <button type="button" className={classes} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}

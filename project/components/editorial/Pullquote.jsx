import React from "react";

const PULLQUOTE_CSS = `
.au-pullquote { margin: 0; font-family: var(--font-display); color: var(--text-heading); max-width: 30ch; }
.au-pullquote--center { text-align: center; margin-inline: auto; }
.au-pullquote__mark { display: block; font-size: 2.6em; line-height: 0.2; color: var(--brass-400); height: 0.5em; }
.au-pullquote__text { font-style: italic; font-weight: var(--weight-regular); font-size: var(--text-2xl); line-height: 1.24; letter-spacing: var(--tracking-tight); }
.au-pullquote__rule { width: 44px; height: 1.5px; background: var(--brass-500); border: 0; margin: var(--space-4) 0 var(--space-3); }
.au-pullquote--center .au-pullquote__rule { margin-inline: auto; }
.au-pullquote__cite { font-family: var(--font-sans); font-style: normal; font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--text-muted); letter-spacing: 0.01em; }
.au-pullquote__cite span { display: block; font-weight: var(--weight-regular); color: var(--text-subtle); font-size: var(--text-xs); margin-top: 2px; }
`;

function ensurePullquoteStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-pullquote-styles")) return;
  const el = document.createElement("style");
  el.id = "au-pullquote-styles";
  el.textContent = PULLQUOTE_CSS;
  document.head.appendChild(el);
}

/**
 * Aurelia Pullquote — a large italic Playfair quotation with attribution.
 */
export function Pullquote({ children, cite, role, align = "left", mark = true, className = "", ...rest }) {
  ensurePullquoteStyles();
  const classes = ["au-pullquote", align === "center" ? "au-pullquote--center" : "", className].filter(Boolean).join(" ");
  return (
    <figure className={classes} {...rest}>
      {mark ? <span className="au-pullquote__mark" aria-hidden="true">&ldquo;</span> : null}
      <blockquote className="au-pullquote__text" style={{ margin: 0 }}>{children}</blockquote>
      {(cite || role) ? (
        <>
          <hr className="au-pullquote__rule" />
          <figcaption className="au-pullquote__cite">
            {cite}
            {role ? <span>{role}</span> : null}
          </figcaption>
        </>
      ) : null}
    </figure>
  );
}

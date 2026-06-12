import React from "react";

const CARD_CSS = `
.au-card {
  background: var(--surface-card);
  border: var(--border-hairline) solid var(--border-subtle);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  display: flex; flex-direction: column;
  font-family: var(--font-sans); color: var(--text-body);
  transition: box-shadow var(--duration-normal) var(--ease-standard),
              border-color var(--duration-normal) var(--ease-standard),
              transform var(--duration-normal) var(--ease-standard);
}
.au-card--raised { background: var(--surface-raised); }
.au-card--inverse { background: var(--surface-inverse); color: var(--text-inverse); border-color: var(--border-inverse); }
.au-card--inverse .au-card__title { color: var(--stone-50); }
.au-card--flat { box-shadow: none; }
.au-card--interactive { cursor: pointer; }
.au-card--interactive:hover { box-shadow: var(--shadow-md); border-color: var(--border-default); transform: translateY(-2px); }
.au-card--interactive:active { transform: translateY(0); }

.au-card__media { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: var(--stone-100); }
.au-card__body { padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-2); }
.au-card__eyebrow { font: var(--type-eyebrow); letter-spacing: var(--tracking-wider); text-transform: uppercase; color: var(--text-accent); }
.au-card__title { font-family: var(--font-display); font-weight: var(--weight-medium); font-size: var(--text-lg); line-height: 1.2; color: var(--text-heading); }
.au-card__meta { font: var(--type-caption); color: var(--text-muted); }
.au-card__footer { padding: var(--space-4) var(--space-5); border-top: var(--border-hairline) solid var(--border-subtle); display: flex; align-items: center; gap: var(--space-3); }
`;

function ensureCardStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-card-styles")) return;
  const el = document.createElement("style");
  el.id = "au-card-styles";
  el.textContent = CARD_CSS;
  document.head.appendChild(el);
}

/**
 * Aurelia Card — a paper surface for grouped content; optional cover image,
 * eyebrow, title, meta and footer. Children render inside the body below the
 * provided slots.
 */
export function Card({
  image,
  imageAlt = "",
  eyebrow,
  title,
  meta,
  footer,
  tone = "default",
  interactive = false,
  flat = false,
  children,
  className = "",
  ...rest
}) {
  ensureCardStyles();
  const classes = [
    "au-card",
    tone !== "default" ? `au-card--${tone}` : "",
    interactive ? "au-card--interactive" : "",
    flat ? "au-card--flat" : "",
    className,
  ].filter(Boolean).join(" ");
  const hasBody = eyebrow || title || meta || children;
  return (
    <div className={classes} {...rest}>
      {image ? <img className="au-card__media" src={image} alt={imageAlt} /> : null}
      {hasBody ? (
        <div className="au-card__body">
          {eyebrow ? <span className="au-card__eyebrow">{eyebrow}</span> : null}
          {title ? <h3 className="au-card__title">{title}</h3> : null}
          {meta ? <span className="au-card__meta">{meta}</span> : null}
          {children}
        </div>
      ) : null}
      {footer ? <div className="au-card__footer">{footer}</div> : null}
    </div>
  );
}

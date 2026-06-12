import React from "react";

const RULE_CSS = `
.au-rule { display: flex; align-items: center; gap: var(--space-4); border: 0; width: 100%; color: var(--brass-500); }
.au-rule::before, .au-rule::after { content: ""; flex: 1; height: 1.5px; background: currentColor; opacity: 0.5; }
.au-rule__mark { font-family: var(--font-display); font-size: var(--text-md); line-height: 1; color: currentColor; white-space: nowrap; }
.au-rule--plain { display: block; height: 1.5px; background: var(--border-default); opacity: 1; }
.au-rule--plain::before, .au-rule--plain::after { content: none; }
.au-rule--inset { width: auto; }
`;

function ensureRuleStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-rule-styles")) return;
  const el = document.createElement("style");
  el.id = "au-rule-styles";
  el.textContent = RULE_CSS;
  document.head.appendChild(el);
}

/**
 * Aurelia Rule — an editorial section divider with an optional centered mark.
 */
export function Rule({ mark = "\u273B", plain = false, className = "", ...rest }) {
  ensureRuleStyles();
  if (plain) {
    return <hr className={["au-rule", "au-rule--plain", className].filter(Boolean).join(" ")} {...rest} />;
  }
  return (
    <div role="separator" className={["au-rule", className].filter(Boolean).join(" ")} {...rest}>
      {mark ? <span className="au-rule__mark" aria-hidden="true">{mark}</span> : null}
    </div>
  );
}

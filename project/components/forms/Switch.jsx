import React from "react";

const SWITCH_CSS = `
.au-switch { display: inline-flex; gap: 0.65em; align-items: center; cursor: pointer; font-family: var(--font-sans); color: var(--text-body); }
.au-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.au-switch__track {
  flex: none; width: 40px; height: 23px; border-radius: var(--radius-pill);
  background: var(--stone-300); padding: 2px; display: flex; align-items: center;
  transition: background var(--duration-normal) var(--ease-standard);
}
.au-switch__thumb {
  width: 19px; height: 19px; border-radius: 50%; background: var(--surface-card);
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-normal) var(--ease-standard);
}
.au-switch input:checked + .au-switch__track { background: var(--primary); }
.au-switch input:checked + .au-switch__track .au-switch__thumb { transform: translateX(17px); }
.au-switch input:focus-visible + .au-switch__track { box-shadow: var(--ring); }
.au-switch input:disabled + .au-switch__track { opacity: 0.5; }
.au-switch--disabled { cursor: not-allowed; }
.au-switch__label { font-size: var(--text-sm); }
`;

function ensureSwitchStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-switch-styles")) return;
  const el = document.createElement("style");
  el.id = "au-switch-styles";
  el.textContent = SWITCH_CSS;
  document.head.appendChild(el);
}

/**
 * Aurelia Switch — an on/off toggle.
 */
export function Switch({ label, disabled = false, className = "", ...rest }) {
  ensureSwitchStyles();
  return (
    <label className={["au-switch", disabled ? "au-switch--disabled" : "", className].filter(Boolean).join(" ")}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="au-switch__track" aria-hidden="true"><span className="au-switch__thumb" /></span>
      {label ? <span className="au-switch__label">{label}</span> : null}
    </label>
  );
}

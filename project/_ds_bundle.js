/* @ds-bundle: {"format":3,"namespace":"AureliaDesignSystem_df5d1c","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Pullquote","sourcePath":"components/editorial/Pullquote.jsx"},{"name":"Rule","sourcePath":"components/editorial/Rule.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"fa35bbad6744","components/actions/IconButton.jsx":"af022c1fec9f","components/display/Avatar.jsx":"ff6c8b1abb5e","components/display/Badge.jsx":"cd7395b65193","components/display/Card.jsx":"ea6f02be4380","components/display/Tag.jsx":"c30de7187f27","components/editorial/Pullquote.jsx":"750914dc292a","components/editorial/Rule.jsx":"cfed958dda87","components/forms/Checkbox.jsx":"234b496ed237","components/forms/Input.jsx":"7d6465a6574b","components/forms/Switch.jsx":"de6bd7fe320b","ui_kits/clearframe/App.jsx":"4a130b87f848","ui_kits/clearframe/parts/Chrome.jsx":"20649cc086eb","ui_kits/clearframe/parts/Data.jsx":"ccb3e3a8c87f","ui_kits/clearframe/parts/Icons.jsx":"5bd81c933fad","ui_kits/clearframe/screens/Contact.jsx":"c6a66649e8a8","ui_kits/clearframe/screens/Home.jsx":"d84dadd06d58","ui_kits/clearframe/screens/Services.jsx":"a1e52911105c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AureliaDesignSystem_df5d1c = window.AureliaDesignSystem_df5d1c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const classes = ["au-btn", `au-btn--${variant}`, variant !== "link" ? `au-btn--${size}` : "", block ? "au-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "au-btn__icon",
    "aria-hidden": "true"
  }, leadingIcon) : null, children, trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "au-btn__icon",
    "aria-hidden": "true"
  }, trailingIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  round = false,
  className = "",
  ...rest
}) {
  ensureIconButtonStyles();
  const classes = ["au-iconbtn", `au-iconbtn--${variant}`, `au-iconbtn--${size}`, round ? "au-iconbtn--round" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AVATAR_CSS = `
.au-avatar {
  display: inline-grid; place-items: center; flex: none; overflow: hidden;
  background: var(--brass-100); color: var(--brass-600);
  font-family: var(--font-display); font-weight: var(--weight-medium);
  border-radius: 50%; user-select: none; position: relative;
}
.au-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.au-avatar--ring { box-shadow: 0 0 0 2px var(--surface-card), 0 0 0 3.5px var(--brass-400); }
.au-avatar--square { border-radius: var(--radius-md); }

.au-avatar--xs { width: 24px; height: 24px; font-size: 10px; }
.au-avatar--sm { width: 32px; height: 32px; font-size: 13px; }
.au-avatar--md { width: 44px; height: 44px; font-size: 17px; }
.au-avatar--lg { width: 60px; height: 60px; font-size: 23px; }
.au-avatar--xl { width: 88px; height: 88px; font-size: 34px; }

.au-avatar-group { display: inline-flex; }
.au-avatar-group .au-avatar { box-shadow: 0 0 0 2px var(--surface-card); margin-left: -10px; }
.au-avatar-group .au-avatar:first-child { margin-left: 0; }
`;
function ensureAvatarStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("au-avatar-styles")) return;
  const el = document.createElement("style");
  el.id = "au-avatar-styles";
  el.textContent = AVATAR_CSS;
  document.head.appendChild(el);
}
function initials(name) {
  if (!name) return "";
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

/**
 * Aurelia Avatar — circular (or square) image/initials avatar.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  square = false,
  className = "",
  ...rest
}) {
  ensureAvatarStyles();
  const classes = ["au-avatar", `au-avatar--${size}`, ring ? "au-avatar--ring" : "", square ? "au-avatar--square" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  dot = false,
  className = "",
  ...rest
}) {
  ensureBadgeStyles();
  const classes = ["au-badge", `au-badge--${tone}`, variant !== "soft" ? `au-badge--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "au-badge__dot",
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
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
  const classes = ["au-card", tone !== "default" ? `au-card--${tone}` : "", interactive ? "au-card--interactive" : "", flat ? "au-card--flat" : "", className].filter(Boolean).join(" ");
  const hasBody = eyebrow || title || meta || children;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), image ? /*#__PURE__*/React.createElement("img", {
    className: "au-card__media",
    src: image,
    alt: imageAlt
  }) : null, hasBody ? /*#__PURE__*/React.createElement("div", {
    className: "au-card__body"
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "au-card__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "au-card__title"
  }, title) : null, meta ? /*#__PURE__*/React.createElement("span", {
    className: "au-card__meta"
  }, meta) : null, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "au-card__footer"
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const Xmark = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));

/**
 * Aurelia Tag — a pill for categories / filters; optionally a link or removable.
 */
function Tag({
  children,
  tone = "default",
  href,
  onRemove,
  className = "",
  ...rest
}) {
  ensureTagStyles();
  const classes = ["au-tag", tone !== "default" ? `au-tag--${tone}` : "", className].filter(Boolean).join(" ");
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "au-tag__remove",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(Xmark, null)) : null);
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: classes,
      href: href
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), content);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Pullquote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Pullquote({
  children,
  cite,
  role,
  align = "left",
  mark = true,
  className = "",
  ...rest
}) {
  ensurePullquoteStyles();
  const classes = ["au-pullquote", align === "center" ? "au-pullquote--center" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: classes
  }, rest), mark ? /*#__PURE__*/React.createElement("span", {
    className: "au-pullquote__mark",
    "aria-hidden": "true"
  }, "\u201C") : null, /*#__PURE__*/React.createElement("blockquote", {
    className: "au-pullquote__text",
    style: {
      margin: 0
    }
  }, children), cite || role ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
    className: "au-pullquote__rule"
  }), /*#__PURE__*/React.createElement("figcaption", {
    className: "au-pullquote__cite"
  }, cite, role ? /*#__PURE__*/React.createElement("span", null, role) : null)) : null);
}
Object.assign(__ds_scope, { Pullquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Pullquote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Rule({
  mark = "\u273B",
  plain = false,
  className = "",
  ...rest
}) {
  ensureRuleStyles();
  if (plain) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      className: ["au-rule", "au-rule--plain", className].filter(Boolean).join(" ")
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    className: ["au-rule", className].filter(Boolean).join(" ")
  }, rest), mark ? /*#__PURE__*/React.createElement("span", {
    className: "au-rule__mark",
    "aria-hidden": "true"
  }, mark) : null);
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Rule.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const CheckMark = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));

/**
 * Aurelia Checkbox — a labelled checkbox with optional description.
 */
function Checkbox({
  label,
  description,
  disabled = false,
  className = "",
  ...rest
}) {
  ensureCheckboxStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["au-check", disabled ? "au-check--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "au-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(CheckMark, null)), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "au-check__text"
  }, label, description ? /*#__PURE__*/React.createElement("small", null, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
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
  const inputEl = /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ["au-input", error ? "au-input--error" : "", className].filter(Boolean).join(" "),
    "aria-invalid": error ? "true" : undefined
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: "au-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "au-field__label",
    htmlFor: fieldId
  }, label, optional ? /*#__PURE__*/React.createElement("span", {
    className: "au-field__opt"
  }, "Optional") : null) : null, leadingIcon ? /*#__PURE__*/React.createElement("div", {
    className: "au-field__wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-field__icon",
    "aria-hidden": "true"
  }, leadingIcon), inputEl) : inputEl, error ? /*#__PURE__*/React.createElement("span", {
    className: "au-field__hint au-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "au-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Switch({
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  ensureSwitchStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["au-switch", disabled ? "au-switch--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "au-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "au-switch__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clearframe/App.jsx
try { (() => {
// Clearframe UI kit — app shell, routing, scrolling, toast.
const {
  TopNav,
  Footer,
  Home,
  Services,
  Contact,
  Icons
} = APP;
const {
  useState,
  useEffect,
  useCallback,
  useRef
} = React;
const PAGES = {
  home: true,
  services: true,
  contact: true
};
function App() {
  const [route, setRoute] = useState(typeof window !== "undefined" && window.__CF_ROUTE__ || "home");
  const [toast, setToast] = useState(null);
  const pendingScroll = useRef(null);

  // Smooth-scroll to a section id (offset for the sticky nav).
  const scrollToId = useCallback(id => {
    if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    const el = document.getElementById(id);
    if (!el) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }, []);
  APP.scrollTo = scrollToId;

  // navigate("services") / navigate("contact") / navigate("home")
  // navigate("home#packages") jumps to a section, switching page first if needed.
  const navigate = useCallback(target => {
    const [page, hash] = String(target).split("#");
    if (PAGES[page] && page !== undefined) {
      if (page !== route) {
        if (hash) pendingScroll.current = hash;
        setRoute(page);
        if (!hash) window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      } else {
        hash ? scrollToId(hash) : window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    } else {
      // bare section id on the current page
      scrollToId(target);
    }
  }, [route, scrollToId]);
  const quote = useCallback(() => navigate("contact"), [navigate]);
  const submit = useCallback(() => setToast("Thanks — we’ll send your quote within one business day."), []);

  // After a route change that requested a section, scroll once mounted.
  useEffect(() => {
    if (pendingScroll.current) {
      const id = pendingScroll.current;
      pendingScroll.current = null;
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)));
    }
  }, [route, scrollToId]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);
  return /*#__PURE__*/React.createElement("div", {
    className: "cf-app"
  }, /*#__PURE__*/React.createElement(TopNav, {
    route: route,
    onNavigate: navigate,
    onQuote: quote
  }), route === "home" && /*#__PURE__*/React.createElement(Home, {
    onQuote: quote,
    onSubmitForm: submit,
    onNavigate: navigate
  }), route === "services" && /*#__PURE__*/React.createElement(Services, {
    onQuote: quote
  }), route === "contact" && /*#__PURE__*/React.createElement(Contact, {
    onSubmitForm: submit
  }), /*#__PURE__*/React.createElement(Footer, {
    route: route,
    onNavigate: navigate,
    onQuote: quote
  }), toast ? /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 16
  }), toast) : null);
}
APP.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clearframe/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clearframe/parts/Chrome.jsx
try { (() => {
// Clearframe UI kit — chrome: top nav + footer.
const {
  Icons
} = APP;
const {
  Button
} = DS;
function TopNav({
  route,
  onNavigate,
  onQuote
}) {
  const links = [["home", "Home"], ["services", "Services"], ["home#packages", "Pricing"], ["home#process", "Process"], ["contact", "Contact"]];
  const isActive = id => {
    const page = id.split("#")[0];
    return page === route && !id.includes("#");
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav__brand",
    onClick: () => onNavigate("home")
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__word"
  }, "Clearframe")), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: "nav__link" + (isActive(id) ? " nav__link--active" : ""),
    onClick: () => onNavigate(id)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__phone"
  }, /*#__PURE__*/React.createElement(Icons.Phone, {
    size: 16
  }), " (416) 555-0142"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: onQuote
  }, "Get a quote")))));
}
function Footer({
  onNavigate,
  onQuote
}) {
  const cols = [["Services", [["Launch Page", "services#packages"], ["Business Website", "services#packages"], ["Growth Website", "services#packages"], ["Care & maintenance", "services#care"]]], ["Company", [["Services", "services"], ["Process", "home#process"], ["FAQ", "home#faq"], ["Contact", "contact"]]]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "footer__brand footer__brand--btn",
    onClick: () => onNavigate("home")
  }, "Clearframe Studio"), /*#__PURE__*/React.createElement("p", {
    className: "footer__about"
  }, "Fast, professional websites for Toronto & GTA businesses. Clean, credible, and built to convert.")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    className: "footer__col",
    key: title
  }, /*#__PURE__*/React.createElement("h4", null, title), items.map(([label, target]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    onClick: () => onNavigate(target)
  }, label)))), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    onClick: onQuote
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(Icons.Mail, {
    size: 15
  }), " hello@clearframe.studio")), /*#__PURE__*/React.createElement("a", {
    onClick: onQuote
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(Icons.Phone, {
    size: 15
  }), " (416) 555-0142")), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate("contact")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(Icons.Pin, {
    size: 15
  }), " Toronto, ON")))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Clearframe Studio. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Toronto & the GTA"))));
}
APP.TopNav = TopNav;
APP.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clearframe/parts/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clearframe/parts/Data.jsx
try { (() => {
// Clearframe UI kit — shared content data (packages, care plans, process, faqs).

APP.PACKAGES = [{
  id: "launch",
  name: "Launch Page",
  price: "$500",
  cadence: "from · CAD",
  desc: "A premium one-page site for businesses that need to look professional online — fast.",
  who: "New businesses testing an idea, or anyone who needs a credible page live this week.",
  features: ["One-page website", "Mobile-friendly design", "Contact form + clear CTAs", "Basic SEO + analytics setup", "FAQ section", "1 round of refinements", "Launch support"],
  timeline: "~3 business days",
  pay: "100% upfront",
  cta: "Start a Launch Page",
  featured: false
}, {
  id: "business",
  name: "Business Website",
  price: "$1,500",
  cadence: "from · CAD",
  desc: "A polished 3–5 page site that builds trust and turns visitors into inquiries.",
  who: "Established service businesses that need a proper website to win more work.",
  features: ["3–5 pages", "Mobile-friendly design", "Testimonials + FAQ sections", "Local SEO setup", "Analytics setup", "2 rounds of refinements"],
  timeline: "~5–7 business days",
  pay: "50% upfront, 50% before launch",
  cta: "Start a Business Site",
  featured: true
}, {
  id: "growth",
  name: "Growth Website",
  price: "$2,800",
  cadence: "from · CAD",
  desc: "Built to rank, convert, and scale as your business grows.",
  who: "Businesses ready to invest in more pages, stronger SEO, and serious conversion.",
  features: ["5–8 pages", "Stronger conversion structure", "Extra landing / service pages", "Deeper SEO structure", "Stronger trust & proof sections", "More polished, custom design"],
  timeline: "Scoped per project",
  pay: "50% upfront, 50% before launch",
  cta: "Plan a Growth Site",
  featured: false
}];

// Care & maintenance — sold as the paid service (not "hosting" resale).
APP.CARE = [{
  name: "Essential Care",
  price: "$39",
  unit: "/mo",
  features: ["Fast, secure hosting handled for you", "Software & security updates", "Weekly backups + uptime monitoring", "Up to 30 min of edits / month"]
}, {
  name: "Plus Care",
  price: "$89",
  unit: "/mo",
  featured: true,
  features: ["Everything in Essential", "Up to 2 hours of edits / month", "Monthly performance check", "Priority same-day replies", "Quarterly SEO tune-up"]
}, {
  name: "On-call",
  price: "$95",
  unit: "/hr",
  features: ["No monthly commitment", "Edits & fixes as you need them", "Hosting handled separately", "Billed in 15-min increments"]
}];
APP.WHY = [["Zap", "Fast turnaround", "Launch Pages go live in about three business days — not months of back-and-forth."], ["Shield", "Built to convert", "Clear calls-to-action and forms that turn visitors into real inquiries."], ["Layout", "Looks credible", "Premium, professional design that earns trust on the very first visit."], ["Pin", "Local & responsive", "Toronto-based, with real replies within one business day."]];
APP.STEPS = [["Brief", "A short call to understand your business, goals, and the inquiries you want."], ["Design", "We design a clean, on-brand layout and review it with you together."], ["Build", "We build it fast — responsive, quick-loading, and search-ready."], ["Launch", "We connect your domain, go live, and hand over the keys."]];
APP.FAQS = [["How fast can my site go live?", "Launch Pages go live in about three business days. Business Websites are typically ready in five to seven business days once we have your content and photos."], ["Do I need to write all the content?", "No. We guide you with a simple brief and can polish or write your copy as part of the project, so you are never staring at a blank page."], ["Will my site work well on phones?", "Always. Every site is built mobile-first and tested across phones, tablets, and the major browsers before launch."], ["Can you help me get found on Google?", "Yes. Every package includes basic SEO and analytics setup. Business and Growth Websites add local SEO and a deeper, search-ready structure."], ["How does payment work?", "Launch Pages are 100% upfront. Business and Growth Websites are 50% upfront and 50% before launch. You always get a fixed quote before any work begins."], ["What about hosting and upkeep?", "We set you up on fast, secure infrastructure and offer simple monthly Care plans for hosting, updates, and edits — so your site stays current without you lifting a finger."]];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clearframe/parts/Data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clearframe/parts/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Clearframe UI kit — shared icon set (Lucide-style, 1.6 stroke).
function Icon({
  paths,
  size = 20,
  sw = 1.6,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), paths);
}
const Icons = {
  Check: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })
  })),
  Plus: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })
  })),
  ArrowRight: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }))
  })),
  Phone: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement("path", {
      d: "M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
    })
  })),
  Menu: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M3 12h18M3 18h18"
    })
  })),
  Star: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    fill: "currentColor",
    sw: "0",
    paths: /*#__PURE__*/React.createElement("path", {
      d: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"
    })
  })),
  Zap: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement("path", {
      d: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
    })
  })),
  Shield: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    }))
  })),
  Layout: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M9 9v11"
    }))
  })),
  Search: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    }))
  })),
  Phone2: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "7",
      y: "3",
      width: "10",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 18h2"
    }))
  })),
  Clock: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    }))
  })),
  Pin: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "2.5"
    }))
  })),
  Mail: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m3 7 9 6 9-6"
    }))
  })),
  Pen: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 20h9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
    }))
  })),
  Rocket: p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
    paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 4c4 0 6 2 6 6 0 5-5 9-9 11l-3-3C10 14 9 9 14 4Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14.5",
      cy: "9.5",
      r: "1.5"
    }))
  }))
};
APP.Icons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clearframe/parts/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clearframe/screens/Contact.jsx
try { (() => {
// Clearframe UI kit — Contact page.
const {
  Icons,
  PACKAGES
} = APP;
const {
  Button,
  Input,
  Checkbox
} = DS;
function Contact({
  onSubmitForm
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero page-hero--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    className: "page-hero__title"
  }, "Let's get your site started"), /*#__PURE__*/React.createElement("p", {
    className: "page-hero__lead"
  }, "Tell us a little about your business and we'll send a fixed quote and timeline \u2014 usually within one business day."))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "contact-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "contact-card__title"
  }, "Talk to a person"), /*#__PURE__*/React.createElement("ul", {
    className: "contact-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contact-ico"
  }, /*#__PURE__*/React.createElement(Icons.Mail, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "contact-k"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@clearframe.studio"
  }, "hello@clearframe.studio"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contact-ico"
  }, /*#__PURE__*/React.createElement(Icons.Phone, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "contact-k"
  }, "Phone"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+14165550142"
  }, "(416) 555-0142"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contact-ico"
  }, /*#__PURE__*/React.createElement(Icons.Pin, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "contact-k"
  }, "Studio"), /*#__PURE__*/React.createElement("span", null, "Toronto, Ontario \u2014 serving the GTA"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contact-ico"
  }, /*#__PURE__*/React.createElement(Icons.Clock, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "contact-k"
  }, "Hours"), /*#__PURE__*/React.createElement("span", null, "Mon\u2013Fri, 9am\u20136pm ET")))), /*#__PURE__*/React.createElement("div", {
    className: "contact-promise"
  }, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 16
  }), " We reply within one business day.")), /*#__PURE__*/React.createElement("div", {
    className: "contact-quote"
  }, /*#__PURE__*/React.createElement("p", null, "\u201CClearframe had our new site live in under two weeks \u2014 the inquiries started the same month.\u201D"), /*#__PURE__*/React.createElement("span", null, "\u2014 Daniel R., North End Plumbing"))), /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: e => {
      e.preventDefault();
      onSubmitForm();
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "contact-form__title"
  }, "Request your quote"), /*#__PURE__*/React.createElement("div", {
    className: "contact-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Jordan Lee",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@business.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "contact-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Business name",
    placeholder: "North End Plumbing"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone (optional)",
    type: "tel",
    placeholder: "(416) 555-0000",
    optional: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "cta__field-label"
  }, "Which package fits?"), /*#__PURE__*/React.createElement("select", {
    className: "cta__select",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select a starting point\u2026"), PACKAGES.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id
  }, p.name, " \u2014 ", p.price)), /*#__PURE__*/React.createElement("option", null, "Not sure yet \u2014 help me choose"), /*#__PURE__*/React.createElement("option", null, "Care & maintenance only"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "cta__field-label"
  }, "Tell us about your project"), /*#__PURE__*/React.createElement("textarea", {
    className: "contact-textarea",
    rows: "4",
    placeholder: "A few sentences about your business and what you need\u2026"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Email me a copy of my request",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    block: true,
    type: "submit"
  }, "Send request"), /*#__PURE__*/React.createElement("p", {
    className: "cta__note"
  }, "No spam, ever. We only use your details to reply to your inquiry."))))));
}
APP.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clearframe/screens/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clearframe/screens/Home.jsx
try { (() => {
// Clearframe UI kit — Home screen (all homepage sections).
const {
  Icons,
  PACKAGES,
  WHY,
  STEPS,
  FAQS
} = APP;
const {
  Button,
  Badge,
  Card,
  Pullquote,
  Input,
  Checkbox,
  Avatar
} = DS;
const {
  useState
} = React;
function img(n) {
  return "../../assets/placeholders/" + n + ".png";
}
function Home({
  onQuote,
  onSubmitForm,
  onNavigate
}) {
  const [open, setOpen] = useState(0);
  const goQuote = () => APP.scrollTo("quote");
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Toronto & GTA Web Design"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Get online fast. ", /*#__PURE__*/React.createElement("em", null, "Look credible"), " from day one."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Clean, professional websites for Toronto businesses \u2014 designed to build trust and bring in inquiries, without the agency wait."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: goQuote
  }, "Book a free call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => APP.scrollTo("packages")
  }, "See packages")), /*#__PURE__*/React.createElement("div", {
    className: "hero__trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "au-avatar-group"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Reid",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Sam Cole",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Lee Park",
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    className: "hero__trust-text"
  }, /*#__PURE__*/React.createElement("strong", null, "40+ Toronto businesses"), " launched with Clearframe"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__card"
  }, /*#__PURE__*/React.createElement("img", {
    src: img("hero-mock"),
    alt: "Website preview"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-num"
  }, "~3 days"), /*#__PURE__*/React.createElement("span", {
    className: "b-lab"
  }, "to launch", /*#__PURE__*/React.createElement("br", null), "your page")))))), /*#__PURE__*/React.createElement("section", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust__row"
  }, [["40+", "Toronto sites launched"], ["~3 days", "To launch a page"], ["4.9★", "Average client review"], ["100%", "Mobile-ready builds"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    className: "trust__stat",
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust__num"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "trust__lab"
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "packages"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-intro center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Packages"), /*#__PURE__*/React.createElement("h2", null, "Straightforward pricing, fixed quotes"), /*#__PURE__*/React.createElement("p", null, "Pick a starting point. Every project is scoped and quoted up front \u2014 no surprises, no hourly meters.")), /*#__PURE__*/React.createElement("div", {
    className: "pkg-grid"
  }, PACKAGES.map(p => /*#__PURE__*/React.createElement("div", {
    className: "pkg" + (p.featured ? " pkg--featured" : ""),
    key: p.name
  }, p.featured ? /*#__PURE__*/React.createElement("span", {
    className: "pkg__flag"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "Most popular")) : null, /*#__PURE__*/React.createElement("div", {
    className: "pkg__name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "pkg__price"
  }, p.price, " ", /*#__PURE__*/React.createElement("small", null, "from \xB7 CAD")), /*#__PURE__*/React.createElement("p", {
    className: "pkg__desc"
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    className: "pkg__features"
  }, p.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 18
  }), " ", f))), /*#__PURE__*/React.createElement("div", {
    className: "pkg__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? "accent" : "primary",
    block: true,
    onClick: goQuote
  }, p.cta), /*#__PURE__*/React.createElement("p", {
    className: "pkg__pay"
  }, p.pay))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why Clearframe"), /*#__PURE__*/React.createElement("h2", null, "A website that works as hard as you do"), /*#__PURE__*/React.createElement("p", null, "We keep it clear and practical: a credible site, launched quickly, built to bring in the right inquiries.")), /*#__PURE__*/React.createElement("div", {
    className: "why__list"
  }, WHY.map(([ico, title, text]) => {
    const I = Icons[ico];
    return /*#__PURE__*/React.createElement("div", {
      className: "why__item",
      key: title
    }, /*#__PURE__*/React.createElement("span", {
      className: "why__ico"
    }, /*#__PURE__*/React.createElement(I, {
      size: 20
    })), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, text));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-intro center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The Process"), /*#__PURE__*/React.createElement("h2", null, "From first call to live in four simple steps")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, STEPS.map(([title, text], i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__num"
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    className: "step__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "step__text"
  }, text)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container center"
  }, /*#__PURE__*/React.createElement(Pullquote, {
    align: "center",
    cite: "Daniel R.",
    role: "Owner, North End Plumbing",
    style: {
      maxWidth: "30ch"
    }
  }, "Clearframe had our new site live in under two weeks \u2014 the inquiries started the same month."))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-intro center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", null, "Questions, answered")), /*#__PURE__*/React.createElement("div", {
    className: "faq__list"
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    className: "faq__item",
    "data-open": open === i,
    key: q
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq__q",
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i
  }, q, /*#__PURE__*/React.createElement("span", {
    className: "faq__ico"
  }, /*#__PURE__*/React.createElement(Icons.Plus, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq__a",
    style: {
      maxHeight: open === i ? "240px" : "0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq__a-inner"
  }, a))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--navy",
    id: "quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-300)"
    }
  }, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "12px"
    }
  }, "Ready to get online?"), /*#__PURE__*/React.createElement("p", null, "Tell us a little about your business and we\u2019ll send a fixed quote and timeline \u2014 usually within one business day."), /*#__PURE__*/React.createElement("ul", {
    className: "cta__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 18
  }), " Free, no-pressure consult call"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 18
  }), " Fixed quote before any work starts"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 18
  }), " Toronto-based, real human replies"))), /*#__PURE__*/React.createElement("form", {
    className: "cta__form",
    onSubmit: e => {
      e.preventDefault();
      onSubmitForm();
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Request your quote"), /*#__PURE__*/React.createElement("div", {
    className: "cta__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Jordan Lee",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@business.com",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Business name",
    placeholder: "North End Plumbing"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "cta__field-label"
  }, "Which package fits?"), /*#__PURE__*/React.createElement("select", {
    className: "cta__select",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select a starting point\u2026"), /*#__PURE__*/React.createElement("option", null, "Launch Page \u2014 from $500"), /*#__PURE__*/React.createElement("option", null, "Business Website \u2014 from $1,500"), /*#__PURE__*/React.createElement("option", null, "Growth Website \u2014 from $2,800"), /*#__PURE__*/React.createElement("option", null, "Not sure yet \u2014 help me choose"))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Email me a copy of my request",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    block: true,
    type: "submit"
  }, "Book a free call"), /*#__PURE__*/React.createElement("p", {
    className: "cta__note"
  }, "No spam, ever. We reply within one business day."))))));
}
APP.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clearframe/screens/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clearframe/screens/Services.jsx
try { (() => {
// Clearframe UI kit — Services page.
const {
  Icons,
  PACKAGES,
  CARE,
  STEPS
} = APP;
const {
  Button,
  Badge
} = DS;
function ServiceRow({
  pkg,
  onQuote,
  flip
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "svc-row" + (flip ? " svc-row--flip" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-row__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-row__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc-row__name"
  }, pkg.name), pkg.featured ? /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Most popular") : null), /*#__PURE__*/React.createElement("div", {
    className: "svc-row__price"
  }, pkg.price, " ", /*#__PURE__*/React.createElement("small", null, pkg.cadence)), /*#__PURE__*/React.createElement("p", {
    className: "svc-row__desc"
  }, pkg.desc), /*#__PURE__*/React.createElement("p", {
    className: "svc-row__who"
  }, /*#__PURE__*/React.createElement("strong", null, "Best for:"), " ", pkg.who), /*#__PURE__*/React.createElement("div", {
    className: "svc-row__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: pkg.featured ? "accent" : "primary",
    onClick: onQuote
  }, pkg.cta), /*#__PURE__*/React.createElement("span", {
    className: "svc-row__meta"
  }, pkg.timeline, " \xB7 ", pkg.pay))), /*#__PURE__*/React.createElement("div", {
    className: "svc-row__card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc-row__inc"
  }, "What's included"), /*#__PURE__*/React.createElement("ul", {
    className: "svc-row__list"
  }, pkg.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 18
  }), " ", f)))));
}
function Services({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    className: "page-hero__title"
  }, "Websites built for Toronto businesses"), /*#__PURE__*/React.createElement("p", {
    className: "page-hero__lead"
  }, "Three clear starting points, each scoped and quoted up front. Pick the one that fits where your business is today \u2014 we'll handle the rest."))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "packages"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-rows"
  }, PACKAGES.map((p, i) => /*#__PURE__*/React.createElement(ServiceRow, {
    key: p.id,
    pkg: p,
    onQuote: onQuote,
    flip: i % 2 === 1
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "care"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-intro center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Care & Maintenance"), /*#__PURE__*/React.createElement("h2", null, "Launched is just the start"), /*#__PURE__*/React.createElement("p", null, "Keep your site fast, secure, and up to date with a simple monthly plan \u2014 hosting, updates, and edits handled, so you can focus on running your business.")), /*#__PURE__*/React.createElement("div", {
    className: "care-grid"
  }, CARE.map(c => /*#__PURE__*/React.createElement("div", {
    className: "care" + (c.featured ? " care--featured" : ""),
    key: c.name
  }, c.featured ? /*#__PURE__*/React.createElement("span", {
    className: "care__flag"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "Recommended")) : null, /*#__PURE__*/React.createElement("div", {
    className: "care__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "care__price"
  }, c.price, /*#__PURE__*/React.createElement("small", null, c.unit)), /*#__PURE__*/React.createElement("ul", {
    className: "care__list"
  }, c.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement(Icons.Check, {
    size: 17
  }), " ", f))), /*#__PURE__*/React.createElement("div", {
    className: "care__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: c.featured ? "accent" : "secondary",
    block: true,
    onClick: onQuote
  }, "Choose ", c.name))))), /*#__PURE__*/React.createElement("p", {
    className: "care__note"
  }, "Hosting runs on fast, secure infrastructure. No long contracts \u2014 cancel or change plans anytime."))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-intro center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", null, "From first call to live in four steps")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, STEPS.map(([title, text], i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__num"
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    className: "step__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "step__text"
  }, text)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--navy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "band-cta__title"
  }, "Not sure which fits? Let's talk it through."), /*#__PURE__*/React.createElement("p", {
    className: "band-cta__lead"
  }, "A quick, no-pressure call and a fixed quote \u2014 usually within one business day."), /*#__PURE__*/React.createElement("div", {
    className: "band-cta__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onQuote
  }, "Book a free call")))));
}
APP.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clearframe/screens/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Pullquote = __ds_scope.Pullquote;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();

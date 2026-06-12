import React from "react";

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
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

/**
 * Aurelia Avatar — circular (or square) image/initials avatar.
 */
export function Avatar({ src, name = "", size = "md", ring = false, square = false, className = "", ...rest }) {
  ensureAvatarStyles();
  const classes = [
    "au-avatar",
    `au-avatar--${size}`,
    ring ? "au-avatar--ring" : "",
    square ? "au-avatar--square" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={classes} title={name || undefined} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}

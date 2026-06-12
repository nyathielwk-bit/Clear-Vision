'use client';

function initials(name) {
  if (!name) return "";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Avatar({ src, name = "", size = "md", ring = false, square = false, className = "", ...rest }) {
  const classes = [
    "au-avatar",
    `au-avatar--${size}`,
    ring ? "au-avatar--ring" : "",
    square ? "au-avatar--square" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={classes} title={name || undefined} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}

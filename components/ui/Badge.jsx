'use client';

export function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  dot = false,
  className = "",
  ...rest
}) {
  const classes = [
    "au-badge",
    `au-badge--${tone}`,
    variant !== "soft" ? `au-badge--${variant}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={classes} {...rest}>
      {dot ? <span className="au-badge__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}

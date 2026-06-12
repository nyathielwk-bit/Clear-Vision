'use client';

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
  const Tag = as;
  const classes = [
    "au-btn",
    `au-btn--${variant}`,
    variant !== "link" ? `au-btn--${size}` : "",
    block ? "au-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {leadingIcon ? (
        <span className="au-btn__icon" aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}
      {children}
      {trailingIcon ? (
        <span className="au-btn__icon" aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}
    </Tag>
  );
}

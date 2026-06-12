'use client';

export function Pullquote({ children, cite, role, align = "left", mark = true, className = "", ...rest }) {
  const classes = [
    "au-pullquote",
    align === "center" ? "au-pullquote--center" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <figure className={classes} {...rest}>
      {mark ? (
        <span className="au-pullquote__mark" aria-hidden="true">
          &ldquo;
        </span>
      ) : null}
      <blockquote className="au-pullquote__text" style={{ margin: 0 }}>
        {children}
      </blockquote>
      {cite || role ? (
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

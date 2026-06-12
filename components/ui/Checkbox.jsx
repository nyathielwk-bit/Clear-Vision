'use client';

const CheckMark = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function Checkbox({ label, description, disabled = false, className = "", ...rest }) {
  return (
    <label
      className={["au-check", disabled ? "au-check--disabled" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="au-check__box" aria-hidden="true">
        <CheckMark />
      </span>
      {label || description ? (
        <span className="au-check__text">
          {label}
          {description ? <small>{description}</small> : null}
        </span>
      ) : null}
    </label>
  );
}

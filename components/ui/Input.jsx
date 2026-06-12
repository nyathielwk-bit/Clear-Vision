'use client';

import { useId } from 'react';

export function Input({
  label,
  hint,
  error,
  optional = false,
  leadingIcon = null,
  className = "",
  ...rest
}) {
  const fieldId = useId();
  const inputEl = (
    <input
      id={fieldId}
      className={["au-input", error ? "au-input--error" : "", className]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={error ? "true" : undefined}
      {...rest}
    />
  );
  return (
    <div className="au-field">
      {label ? (
        <label className="au-field__label" htmlFor={fieldId}>
          {label}
          {optional ? <span className="au-field__opt">Optional</span> : null}
        </label>
      ) : null}
      {leadingIcon ? (
        <div className="au-field__wrap">
          <span className="au-field__icon" aria-hidden="true">
            {leadingIcon}
          </span>
          {inputEl}
        </div>
      ) : (
        inputEl
      )}
      {error ? (
        <span className="au-field__hint au-field__hint--error">{error}</span>
      ) : hint ? (
        <span className="au-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}

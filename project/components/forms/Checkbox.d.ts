import React from "react";

/** Props for the Aurelia {@link Checkbox} component. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Label text beside the box. */
  label?: React.ReactNode;
  /** Secondary description shown under the label. */
  description?: React.ReactNode;
  /** Disable interaction. @default false */
  disabled?: boolean;
  className?: string;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;

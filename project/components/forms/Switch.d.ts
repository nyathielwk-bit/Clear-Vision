import React from "react";

/** Props for the Aurelia {@link Switch} component. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Optional label to the right of the toggle. */
  label?: React.ReactNode;
  /** Disable interaction. @default false */
  disabled?: boolean;
  className?: string;
}

export declare function Switch(props: SwitchProps): JSX.Element;

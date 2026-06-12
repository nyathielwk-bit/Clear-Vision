import React from "react";

/**
 * Props for the Aurelia {@link Input} component.
 *
 * @startingPoint section="Forms" subtitle="Labelled text field with hint & error states" viewport="700x150"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: React.ReactNode;
  /** Helper text shown below the field. */
  hint?: React.ReactNode;
  /** Error message — when set, the field switches to its error styling. */
  error?: React.ReactNode;
  /** Show a subtle "Optional" tag next to the label. @default false */
  optional?: boolean;
  /** Icon node rendered inside the field, on the left. */
  leadingIcon?: React.ReactNode;
  className?: string;
}

export declare function Input(props: InputProps): JSX.Element;

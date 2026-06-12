import React from "react";

/** Props for the Aurelia {@link IconButton} component. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon node (e.g. an inline SVG or icon-font element). */
  children?: React.ReactNode;
  /** Accessible label — applied to aria-label and title. Required for icon-only buttons. */
  label: string;
  /** Visual style. @default "ghost" */
  variant?: "ghost" | "outline" | "solid";
  /** Size preset. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Fully rounded (pill/circular). @default false */
  round?: boolean;
  className?: string;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;

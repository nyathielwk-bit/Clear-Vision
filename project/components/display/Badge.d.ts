import React from "react";

/** Props for the Aurelia {@link Badge} component. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Color intent. @default "neutral" */
  tone?: "neutral" | "accent" | "brass" | "success" | "warning" | "danger" | "info";
  /** Fill style. @default "soft" */
  variant?: "soft" | "solid" | "outline";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  className?: string;
}

export declare function Badge(props: BadgeProps): JSX.Element;

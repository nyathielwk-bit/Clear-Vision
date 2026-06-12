import React from "react";

/**
 * Props for the Aurelia {@link Button} component.
 *
 * @startingPoint section="Actions" subtitle="Primary, secondary, ghost & editorial link buttons" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label / content. */
  children?: React.ReactNode;
  /** Visual style. `accent` is the warm-gold key CTA; `link` is an underlined text link. @default "primary" */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "inverse" | "link";
  /** Size preset (ignored for `link`). @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill the container width. @default false */
  block?: boolean;
  /** Icon node placed before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon node placed after the label. */
  trailingIcon?: React.ReactNode;
  /** Render as a different element (e.g. `"a"`). @default "button" */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export declare function Button(props: ButtonProps): JSX.Element;

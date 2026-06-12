import React from "react";

/**
 * Props for the Aurelia {@link Pullquote} component.
 *
 * @startingPoint section="Editorial" subtitle="Large italic Playfair quote with attribution" viewport="560x300"
 */
export interface PullquoteProps extends React.HTMLAttributes<HTMLElement> {
  /** The quotation text. */
  children?: React.ReactNode;
  /** Attribution name. */
  cite?: React.ReactNode;
  /** Secondary role / title under the name. */
  role?: React.ReactNode;
  /** Alignment. @default "left" */
  align?: "left" | "center";
  /** Show the decorative opening quote mark. @default true */
  mark?: boolean;
  className?: string;
}

export declare function Pullquote(props: PullquoteProps): JSX.Element;

import React from "react";

/** Props for the Aurelia {@link Tag} component. */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Color treatment. @default "default" */
  tone?: "default" | "accent" | "brass";
  /** Render as a link to this URL. */
  href?: string;
  /** When provided, shows a remove (×) button and calls this on click. */
  onRemove?: (e: React.MouseEvent) => void;
  className?: string;
}

export declare function Tag(props: TagProps): JSX.Element;

import React from "react";

/** Props for the Aurelia {@link Rule} component. */
export interface RuleProps extends React.HTMLAttributes<HTMLElement> {
  /** Centered glyph between two brass lines. Pass "" / null to omit. @default "✻" */
  mark?: React.ReactNode;
  /** Render a plain hairline instead of the ornamental brass divider. @default false */
  plain?: boolean;
  className?: string;
}

export declare function Rule(props: RuleProps): JSX.Element;

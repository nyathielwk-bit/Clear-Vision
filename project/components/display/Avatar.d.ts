import React from "react";

/** Props for the Aurelia {@link Avatar} component. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. When omitted, initials from `name` are shown. */
  src?: string;
  /** Person's name — used for initials and the title attribute. */
  name?: string;
  /** Size preset. @default "md" */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Add a brass ring. @default false */
  ring?: boolean;
  /** Square (rounded) instead of circular. @default false */
  square?: boolean;
  className?: string;
}

export declare function Avatar(props: AvatarProps): JSX.Element;

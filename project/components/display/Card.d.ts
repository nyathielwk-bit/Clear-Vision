import React from "react";

/**
 * Props for the Aurelia {@link Card} component.
 *
 * @startingPoint section="Display" subtitle="Editorial content card with cover, title & footer" viewport="360x420"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cover image URL rendered at the top (4:3). */
  image?: string;
  /** Alt text for the cover image. */
  imageAlt?: string;
  /** Small uppercase overline above the title. */
  eyebrow?: React.ReactNode;
  /** Card title (rendered in Playfair). */
  title?: React.ReactNode;
  /** Meta / byline line under the title. */
  meta?: React.ReactNode;
  /** Footer content rendered below a divider. */
  footer?: React.ReactNode;
  /** Surface tone. @default "default" */
  tone?: "default" | "raised" | "inverse";
  /** Add hover-lift affordance for clickable cards. @default false */
  interactive?: boolean;
  /** Remove the resting shadow. @default false */
  flat?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export declare function Card(props: CardProps): JSX.Element;

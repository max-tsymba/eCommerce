import React from 'react';

export type TLinkTagType = 'a' | 'link';
export type TLinkVariant = 'primary' | 'secondary' | 'underline';
export type TLinkTarget = '_self' | '_blank';

export interface ILinkProps
  extends React.HTMLAttributes<HTMLLinkElement | HTMLAnchorElement> {
  as?: TLinkTagType;
  href: string;
  children?: React.ReactNode | string;
  variant?: TLinkVariant;
  className?: string;
  target?: TLinkTarget;
}

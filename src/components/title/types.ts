import { LayoutProps } from 'constants/props';

export interface IHeadingProps extends LayoutProps {
  as?: THeadingTags;
  variant?: 'primary' | 'secondary';
}

export type THeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

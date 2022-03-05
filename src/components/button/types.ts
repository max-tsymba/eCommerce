import { LayoutProps } from 'constants/props';

export interface IButtonProps extends LayoutProps {
  as?: 'button' | 'chevron';
  variant?: TButtonVariant;
  type?: TButtonType;
  size?: TButtonSize;
  href?: string;
  goto?: 'next' | 'back';
}

export type TButtonVariant = 'stroke' | 'colored' | 'bright' | 'simple';
export type TButtonType = 'button' | 'reset' | 'submit';
export type TButtonSize = 'lg' | 'md' | 'sm';

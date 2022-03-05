import { FunctionComponent, ReactNode } from 'react';
import { HeaderNavType } from './headerNav';
import { HeaderPanelType } from './headerPanel';

export interface IHeaderProps {
  className?: string;
  children?: ReactNode | string;
}

export type THeaderComponent = FunctionComponent<IHeaderProps> &
  HeaderNavType &
  HeaderPanelType;

/* eslint-disable @typescript-eslint/no-empty-interface */
import { ELinkType } from 'components/link';
import { LayoutProps } from 'constants/props';
import React from 'react';

export interface INavProps extends LayoutProps {}
export interface INavGroupProps extends LayoutProps {}

export type TNavComponent = React.FunctionComponent<INavProps> &
  ELinkType & { Group: React.FunctionComponent<INavGroupProps> };

import classNames from 'classnames';
import React from 'react';
import { INavGroupProps } from './types';
import styles from './styles.module.scss';

const NavGroup: React.FunctionComponent<INavGroupProps> = ({
  children,
  className,
}): JSX.Element => {
  const classes: string = classNames([styles.group, className]);

  return <div className={classes}>{children}</div>;
};

export default NavGroup;
export type NavGroupType = { Group: typeof NavGroup };

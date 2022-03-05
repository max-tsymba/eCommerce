import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ILinkProps } from './types';
import styles from './styles.module.scss';

const defaultProps: ILinkProps = {
  as: 'link',
  variant: 'secondary',
  target: '_self',
  href: '/',
};

const ELink: React.FunctionComponent<ILinkProps> = ({
  as,
  href,
  children,
  variant,
  className,
  target,
}): JSX.Element => {
  const classes: string = classNames([styles[`${variant}`], className]);

  if (as === 'a') {
    return (
      <a className={classes} href={href} target={target}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={href}>
      {children}
    </Link>
  );
};

ELink.defaultProps = defaultProps;

export default ELink;

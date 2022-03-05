import classNames from 'classnames';
import ELink from 'components/link';
import { INavProps, TNavComponent } from './types';
import styles from './styles.module.scss';
import NavGroup from './navGroup';

const defaultProps: INavProps = {};

const Nav: TNavComponent = ({ children, className }): JSX.Element => {
  const classes: string = classNames([styles.nav, className]);

  return <nav className={classes}>{children}</nav>;
};

Nav.defaultProps = defaultProps;
Nav.Link = ELink;
Nav.Group = NavGroup;

export default Nav;

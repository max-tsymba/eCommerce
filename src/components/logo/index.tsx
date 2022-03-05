import classNames from 'classnames';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import { ILogoProps } from './types';

const Logo: FunctionComponent<ILogoProps> = ({
  className,
  children,
  route,
}): JSX.Element => {
  const classes: string = classNames([className]);

  return (
    <div className={classes}>
      <Link to={route}>
        <img src={logo} alt="logo" />
      </Link>
      {children}
    </div>
  );
};

export default Logo;

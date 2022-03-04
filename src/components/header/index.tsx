import Container from 'containers/Container';
import React from 'react';
import { IHeaderProps } from './types';

const defaultProps: IHeaderProps = {};

const Header: React.FunctionComponent<IHeaderProps> = ({
  className,
  children,
}): JSX.Element => {
  return (
    <header className={className}>
      <Container>{children}</Container>
    </header>
  );
};

Header.defaultProps = defaultProps;

export default Header;

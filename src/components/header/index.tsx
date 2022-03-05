import Container from 'containers/Container';
import HeaderNav from './headerNav';
import HeaderPanel from './headerPanel';
import { IHeaderProps, THeaderComponent } from './types';

const defaultProps: IHeaderProps = {};

const Header: THeaderComponent = ({ className, children }): JSX.Element => {
  return (
    <header className={className}>
      <Container>{children}</Container>
    </header>
  );
};

Header.defaultProps = defaultProps;
Header.Navigation = HeaderNav;
Header.Panel = HeaderPanel;

export default Header;

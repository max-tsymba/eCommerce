import Container from 'containers/Container';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { TFooterComponent } from './types';

const Footer: TFooterComponent = ({ className, children }): JSX.Element => {
  const footerClasses: string = classNames([styles.footer, className]);

  return (
    <footer className={footerClasses}>
      <Container>{children}</Container>
    </footer>
  );
};

export default Footer;

import { FunctionComponent } from 'react';
import banner from 'assets/img/banner.png';
import classNames from 'classnames';
import Button from 'components/button';
import Heading from 'components/title';
import { IBannerProps } from './types';
import styles from './styles.module.scss';

const defaultProps: IBannerProps = {};

const Banner: FunctionComponent<IBannerProps> = ({
  className,
  children,
}): JSX.Element => {
  const bannerClasses: string = classNames([styles.banner, className]);

  return (
    <div
      className={bannerClasses}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Heading as="h6" variant="secondary" className={styles.suptitle}>
        Banner subfocus
      </Heading>
      <Heading as="h3" className={styles.title}>
        Space for heading
      </Heading>
      <Button as="chevron" size="md">
        Read recepies
      </Button>
      {children}
    </div>
  );
};

Banner.defaultProps = defaultProps;

export default Banner;

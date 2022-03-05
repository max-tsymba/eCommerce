import { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IHeadingProps } from './types';
import styles from './styles.module.scss';

const defaultProps: IHeadingProps = {
  as: 'h1',
  variant: 'primary',
};

const Heading: FunctionComponent<IHeadingProps> = ({
  as,
  variant,
  className,
  children,
}): JSX.Element => {
  const variantClasses: string = styles[`heading-${variant}`];
  const headingClasses: string = classNames([
    styles.heading,
    variantClasses,
    className,
  ]);

  if (as === 'h2') return <h2 className={headingClasses}>{children}</h2>;

  if (as === 'h3') return <h3 className={headingClasses}>{children}</h3>;

  if (as === 'h4') return <h4 className={headingClasses}>{children}</h4>;

  if (as === 'h5') return <h5 className={headingClasses}>{children}</h5>;

  if (as === 'h6') return <h6 className={headingClasses}>{children}</h6>;

  return <h1 className={headingClasses}>{children}</h1>;
};

Heading.defaultProps = defaultProps;

export default Heading;

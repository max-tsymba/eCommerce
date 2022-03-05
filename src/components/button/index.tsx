import classNames from 'classnames';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import VectorRight from 'assets/img/vector-right.svg';
import VectorLeft from 'assets/img/vector-left.svg';
import styles from './styles.module.scss';
import { IButtonProps } from './types';

const defaultProps: IButtonProps = {
  as: 'button',
  variant: 'colored',
  type: 'button',
  size: 'lg',
  href: '/',
  goto: 'next',
};

const Button: FunctionComponent<IButtonProps> = ({
  as,
  className,
  children,
  variant,
  type,
  size,
  href,
  goto,
}): JSX.Element => {
  const variantClass: string = styles[`btn-${variant}`];
  const sizeClass: string = styles[`btn-${size}`];

  const buttonClasses: string = classNames([
    styles.btn,
    variantClass,
    sizeClass,
    className,
  ]);

  const chevronClasses: string = classNames([buttonClasses, styles.chevron]);

  if (as === 'chevron') {
    return (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      <Link className={chevronClasses} to={href!}>
        <span className={styles.chevron__span}>
          {goto === 'back' && <VectorLeft />}
          {children}
          {goto === 'next' && <VectorRight />}
        </span>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
export type ButtonType = { Button: typeof Button };

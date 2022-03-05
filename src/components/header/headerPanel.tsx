import Logo from 'components/logo';
import { FunctionComponent } from 'react';
import { HOME } from 'routes/router';
import styles from './styles.module.scss';

const HeaderPanel: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.panel}>
      <div className={styles.panel__inner}>
        <Logo route={HOME} />
      </div>
    </div>
  );
};

export default HeaderPanel;
export type HeaderPanelType = { Panel: typeof HeaderPanel };

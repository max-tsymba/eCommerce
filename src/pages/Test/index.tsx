import Banner from 'components/banner';
import Button from 'components/button';
import React from 'react';
import styles from './styles.module.scss';

const ComponentsPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <h1>Components</h1>
      <Button variant="stroke" as="chevron">
        Button
      </Button>
      <Button type="button" variant="stroke" size="md">
        Button
      </Button>
      <Button type="button" variant="stroke" size="sm">
        Button
      </Button>

      <Button variant="colored" as="chevron">
        Button
      </Button>
      <Button type="button" variant="colored" size="md">
        Button
      </Button>
      <Button type="button" variant="colored" size="sm">
        Button
      </Button>

      <Button variant="bright" as="chevron">
        Button
      </Button>
      <Button type="button" variant="bright" size="md">
        Button
      </Button>
      <Button type="button" variant="bright" size="sm">
        Button
      </Button>

      <Button variant="simple" as="chevron">
        Button
      </Button>
      <Button type="button" variant="simple" size="md">
        Button
      </Button>
      <Button type="button" variant="simple" size="sm">
        Button
      </Button>

      <Banner />
    </div>
  );
};

export default ComponentsPage;

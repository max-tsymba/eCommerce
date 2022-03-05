import ELink from 'components/link';
import React from 'react';

const ComponentsPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div>
        <ELink as="link" href="/">
          Link
        </ELink>
      </div>
      <div>
        <ELink as="a" href="tel:+423423" variant="primary">
          +423423
        </ELink>
      </div>
    </>
  );
};

export default ComponentsPage;

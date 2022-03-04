import Header from 'components/header';
import Container from 'containers/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header>Header</Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default MainLayout;

import Header from 'components/header';
import TopHeader from 'components/topHeader';
import Container from 'containers/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header>
        <TopHeader />
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default MainLayout;

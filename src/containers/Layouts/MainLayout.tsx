import Footer from 'components/footer';
import Header from 'components/header';
import Container from 'containers/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header>
        <Header.Navigation />
        <Header.Panel />
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer>Footer</Footer>
    </>
  );
};

export default MainLayout;

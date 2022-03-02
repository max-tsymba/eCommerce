import Container from 'containers/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FunctionComponent = (): JSX.Element => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default MainLayout;

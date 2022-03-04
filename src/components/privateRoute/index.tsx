import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { NOT_FOUND } from 'routes/router';

const PrivateRoute: React.FunctionComponent = (): JSX.Element => {
  const auth = false;
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={NOT_FOUND} state={{ from: location }} replace />
  );
};

export default PrivateRoute;

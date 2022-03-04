import React from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';
import { NOT_FOUND } from 'routes/router';

const Redirect: React.FunctionComponent = (): JSX.Element => {
  const location: Location = useLocation();

  return <Navigate to={NOT_FOUND} state={{ from: location }} replace />;
};

export default Redirect;

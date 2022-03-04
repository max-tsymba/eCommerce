import PrivateRoute from 'components/privateRoute';
import Redirect from 'components/redirect';
import MainLayout from 'containers/Layouts/MainLayout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { HOME, NOT_FOUND } from 'routes/router';

const Homepage = lazy(() => import('pages/Homepage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={HOME} element={<Homepage />} />
          <Route path={NOT_FOUND} element={<NotFoundPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/test" element={<div>Test</div>} />
          </Route>

          <Route path="*" element={<Redirect />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

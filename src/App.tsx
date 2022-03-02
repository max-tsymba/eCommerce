import MainLayout from 'containers/Layouts/MainLayout';
import { Route, Routes } from 'react-router';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<>Home</>} />
        <Route path="*" element={<>Error</>} />
      </Route>
    </Routes>
  );
};

export default App;

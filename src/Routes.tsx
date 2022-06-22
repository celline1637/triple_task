import { Navigate, useRoutes } from 'react-router-dom';
import { Layout } from './components/layout';
import { Intro } from './pages/intro';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/intro" replace />,
    },
    {
      element: <Layout />,
      path: '/',
      children: [{ path: 'intro', element: <Intro /> }],
    },
  ]);

  return routes;
};

export default Routes;

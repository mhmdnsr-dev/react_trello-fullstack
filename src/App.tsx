import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import { RegistrationForm } from './components/Register/Register';
import SigIn from './components/SigIn/SigIn';
import { queryClient } from './utils/http';
import { QueryClientProvider } from '@tanstack/react-query';
import { loader as getUserDataLoader } from './components/Home/loader';
// import {querCl}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getUserDataLoader,
      },
      {
        path: 'register',
        element: <RegistrationForm />,
      },
      {
        path: 'signin',
        element: <SigIn />,
      },
      // {
      //   path:'profile',
      //   element:<Profile/>
      // },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};

export default App;

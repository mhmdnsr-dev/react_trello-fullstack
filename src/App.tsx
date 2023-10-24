import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import { RegistrationForm } from './components/Register/Register';
import SigIn from './components/SigIn/SigIn';
import { queryClient } from './utils/http';
import { QueryClientProvider } from '@tanstack/react-query';
import { loader as getUserDataLoader } from './components/Home/loader';
import { authContext } from './context/authContext';
import { useState } from 'react';

import { action as logouAction } from './components/NavBar/logoutAction';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    action: logouAction,
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
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  const [whoiam, setWhoiam] = useState({
    isAuthenticated: false,
    user: {
      name: '',
      email: '',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <authContext.Provider value={{ whoiam, setWhoiam }}>
        <RouterProvider router={router} />
      </authContext.Provider>
    </QueryClientProvider>
  );
};

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { authContext } from './context/authContext';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import { RegistrationForm } from './components/Register/Register';
import SigIn from './components/SigIn/SigIn';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { loader as userDataLoader } from './components/Home/loader';
import { action as logouAction } from './components/NavBar/logoutAction';
import Profile from './components/Profile/Profile';
import Error from './components/UI/Error/Error';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/http';

const clientId =
  '520986187464-a6i4es7qhqqv2b36hulluc99i855cgag.apps.googleusercontent.com';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    action: logouAction,
    children: [
      {
        index: true,
        element: <Home />,
        loader: userDataLoader,
        errorElement: <Error />,
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
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  });

  const [whoiam, setWhoiam] = useState({
    isAuthenticated: false,
    user: {
      name: '',
      email: ' ',
    },
  });

  // return <RouterProvider router={router} />;

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <authContext.Provider value={{ whoiam, setWhoiam }}>
          <RouterProvider router={router} />
        </authContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

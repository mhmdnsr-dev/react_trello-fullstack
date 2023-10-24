import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import { RegistrationForm } from './components/Register/Register';
import SigIn from './components/SigIn/SigIn';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';



const clientId = "520986187464-a6i4es7qhqqv2b36hulluc99i855cgag.apps.googleusercontent.com";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  }


  )




  return <RouterProvider router={router} />;
};

export default App;

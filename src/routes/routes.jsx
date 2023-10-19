import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../pages/Tasks';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
import Login from '../pages/login_and_sinup/login/Login';
import Sinup from '../pages/login_and_sinup/sinup/Sinup';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },

    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sinup",
    element: <Sinup />
  }
]);

export default routes;

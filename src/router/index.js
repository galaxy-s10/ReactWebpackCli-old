// import { Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
// import { Redirect } from 'react-router-dom';
const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
    // render: () => <Login></Login>,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
];

export default routes;

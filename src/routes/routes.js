import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Login = lazy(() => import('pages/login/login'));
// const SignUp = lazy(() => import('pages/signup'));

const routes = [
  {
    layout: null,
    name: 'Root',
    path: '/',
    permission: [],
    component: () => <Navigate to="/login" replace />,
  },
  {
    layout: null,
    name: 'Login',
    path: '/login',
    permission: [],
    component: Login
  },
  // {
  //   layout: null,
  //   name: 'SignUp',
  //   permission: [],
  //   path: '/sign-up',
  //   component: SignUp
  // },
  {
    path: '*',
    layout: null,
    permission: [],
    name: 'Not Found',
    component: () => <h2>Page not found!</h2>
  }
];

export default routes;

import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const LayoutContent = lazy(() => import("layout"));
const Login = lazy(() => import('pages/login/login'));
const SignUp = lazy(() => import('pages/sign-up/sign-up'));
const EdVantageNavigator = lazy(() => import('pages/edVantage-navigator/edVantage-navigator'));

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
  {
    layout: null,
    name: 'SignUp',
    permission: [],
    path: '/sign-up',
    component: SignUp
  },
  {
    permission: [],
    authenticated: false,
    layout: LayoutContent,
    name: "edVantage-navigator",
    path: "/edVantage-navigator",
    component: EdVantageNavigator,
  },
  {
    path: '*',
    layout: null,
    permission: [],
    name: 'Not Found',
    component: () => <h2 className="text-3xl font-bold text-black mb-4">Page not found!</h2>
  }
];

export default routes;

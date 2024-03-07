import { AboutPage } from '../components/AboutPage';
import { HomePage } from '../components/HomePage';

export const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
};

export const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
];

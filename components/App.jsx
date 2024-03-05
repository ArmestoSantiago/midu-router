import { useEffect, useState } from 'react';
import { EVENTS } from '../asset/const';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';

const routes = [
  {
    route: '/',
    Component: HomePage
  },
  {
    route: '/about',
    Component: AboutPage
  }
];

export function App () {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPage === '/' && <HomePage />}
      {currentPage === '/about' && <AboutPage />}
    </main>
  );
}

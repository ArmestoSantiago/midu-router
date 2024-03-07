import { EVENTS } from '../asset/const';
import { useEffect, useState } from 'react';
import { match } from 'path-to-regexp';

export function Router ({ route = [], defaultComponent: DefaultComponent }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
    };
  }, []);

  const Page = route.find(({ path }) => {
    if (path === currentPath) return true;

    const matchUrl = match(path, { decode: decodeURIComponent });
    const matched = matchUrl(currentPath);

    if (!matched) return false;
  })?.Component;

  return Page ? <Page /> : <DefaultComponent />;
}

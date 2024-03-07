import { useEffect, useState } from 'react';
import { EVENTS, routes } from '../asset/const';
import { Page404 } from './404';
import { Router } from './Router';

export function App () {
  return (
    <main>
      <Router route={routes} defaultComponent={Page404} />
    </main>
  );
}

import { ReactElement } from 'react';
import { FavouritesContexProvider } from '../contexts/FavouritesContextProvider';
import { Footer, Header } from '.';
import { Outlet } from 'react-router-dom';
import { ProtectedRouteContextProvider } from '../contexts/ProtectedRouteContextProvider';

export function App(): ReactElement {

  return (
    <ProtectedRouteContextProvider>
      <FavouritesContexProvider>
        <Header />
        <Outlet />
        <Footer />
      </FavouritesContexProvider>
    </ProtectedRouteContextProvider>
  );
}

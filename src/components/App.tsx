import { ReactElement } from 'react';
import { FavouritesContexProvider, ProtectedRouteContextProvider } from '../contexts';
import { Footer, Header } from '.';
import { Outlet } from 'react-router-dom';

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

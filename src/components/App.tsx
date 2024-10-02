import { ReactElement } from 'react';
import { FavouritesContexProvider } from '../contexts/FavouritesContextProvider';
import { Footer, Header } from '.';
import { Outlet } from 'react-router-dom';

export function App(): ReactElement {

  return (
    <FavouritesContexProvider>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </FavouritesContexProvider>
  );
}

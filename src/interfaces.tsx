import { ReactNode } from "react";

export interface Game {

}

export interface FavouritesContextProvider {
    favouritesList: Game[];
    setFavouritesList: (favouritesList: Game[]) => void;
}

export interface FavouritesContextProviderChildren {
    children: ReactNode;
}

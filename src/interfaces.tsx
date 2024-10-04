import { ReactNode } from "react";

export interface Game {
    id: number,
    title: string,
    publisher: string,
    developer: string,
    category: string,
    releaseYear: number,
    cover: string,
    players: number
}

export interface FavouritesContextProvider {
    favouritesList: Game[];
    setFavouritesList: (favouritesList: Game[]) => void;
}

export interface FavouritesContextProviderChildren {
    children: ReactNode;
}

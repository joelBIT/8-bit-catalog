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

export interface User {
    id: number,
    username: string,
    isAuthenticated: boolean,
    password: string,
    email: string
}

export interface FavouritesContextProvider {
    favouritesList: Game[];
    setFavouritesList: (favouritesList: Game[]) => void;
}

export interface AuthContextProvider {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export interface ContextProviderChildren {
    children: ReactNode;
}

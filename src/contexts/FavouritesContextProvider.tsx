import { createContext, ReactElement, useState } from "react";
import { Game, FavouritesContextProvider, ContextProviderChildren } from "../interfaces";

export const FavouritesContext = createContext<FavouritesContextProvider>({} as FavouritesContextProvider);

export function FavouritesContexProvider({children}: ContextProviderChildren): ReactElement {
    const [favouritesList, setFavouritesList] = useState<Game[]>([]);

    return (
        <FavouritesContext.Provider value={{favouritesList, setFavouritesList}}>
            {children}
        </FavouritesContext.Provider>
    );
}
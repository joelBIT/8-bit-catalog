import { ReactElement, useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContextProvider";

export function FavouritesPage(): ReactElement {
    const {favouritesList, setFavouritesList} = useContext(FavouritesContext);

    return <>Favourites Page {favouritesList}</>;
}
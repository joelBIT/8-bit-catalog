import { ReactElement, useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContextProvider";

export function FavouritesPage(): ReactElement {
    const {favouritesList, setFavouritesList} = useContext(FavouritesContext);

    return (
        <main id="favouritesPage">
            <h1>Favourites Page</h1>
            { favouritesList.map(favourite => "favourite") }
        </main>
    );
}
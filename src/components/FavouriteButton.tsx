import { ReactElement, useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContextProvider";

export function FavouriteButton(): ReactElement {
    const {favouritesList, setFavouritesList} = useContext(FavouritesContext);
    
    return (
        <button 
            onClick={() => setFavouritesList([...favouritesList, {}])}>
        </button>
    );
}
import { ReactElement, useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContextProvider";
import { Game } from "../interfaces";

export function FavouriteButton( {game}: {game: Game}): ReactElement {
    const {favouritesList, setFavouritesList} = useContext(FavouritesContext);
    const isFavorite = favouritesList.some(favourite => favourite.id === game.id);

    function handleFavourites() {
        if (isFavorite) {
            setFavouritesList(favouritesList.filter(favourite => favourite.id !== game.id));
        } else {
            setFavouritesList([...favouritesList, game]);
        }
    }
    
    return (
        <button 
            className={ isFavorite ? "favouriteButton" : "noFavouriteButton" } 
            onClick={() => handleFavourites()}>
        </button>
    );
}
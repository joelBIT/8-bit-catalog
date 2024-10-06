import { ReactElement, useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContextProvider";
import { Game } from "../interfaces";

export function FavouriteButton( {game}: {game: Game}): ReactElement {
    const {favouritesList, setFavouritesList} = useContext(FavouritesContext);
    const isFavorite = favouritesList.some(favourite => favourite.id === game.id);

    /**
     * Adds or removes a game from the list of favourites. The event is prevented so
     * that a user is not redirected to the game details page when clicking on the favourite button.
     * 
     * @param event     the even object that is created when the favourite button is clicked
     */
    function handleFavourites(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();

        if (isFavorite) {
            setFavouritesList(favouritesList.filter(favourite => favourite.id !== game.id));
        } else {
            setFavouritesList([...favouritesList, game]);
        }
    }
    
    return (
        <button 
            className={ isFavorite ? "favouriteButton" : "noFavouriteButton" } 
            onClick={(event) => handleFavourites(event)}>
        </button>
    );
}
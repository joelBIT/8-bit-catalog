import { ReactElement, useContext } from "react";
import { FavouritesContext } from "../../contexts";
import { Game } from "../../interfaces";

export function FavouriteButton({ game }: { game: Game }): ReactElement {
    const {favouritesList, setFavouritesList} = useContext(FavouritesContext);
    const isFavorite = favouritesList.some(favourite => favourite.id === game.id);

    /**
     * Adds or removes a game from the list of favourites. The event is prevented so
     * that a user is not redirected to the game details page when clicking on the favourite button.
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
            className={ isFavorite ? "favouriteButton isFavourite" : "favouriteButton noFavourite" } 
            onClick={(event) => handleFavourites(event)}>
        </button>
    );
}
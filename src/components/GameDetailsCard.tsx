import { ReactElement, useContext } from "react";
import { Game } from "../interfaces";
import { FavouriteButton } from ".";
import { deleteGame } from "../data";
import { FavouritesContext } from "../contexts/FavouritesContextProvider";
import { useNavigate } from "react-router-dom";
import { COVER_URL } from "../utils";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";

export function GameDetailsCard({game}: {game: Game}): ReactElement {
    const {favouritesList, setFavouritesList} = useContext(FavouritesContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    /**
     * When a game is deleted it is first removed from the favourites list (if being a favourite) and
     * then deleted from local storage. When the game is deleted the user is redirected to the search page.
     */
    function removeGame(): void {
        if (favouritesList.some(favourite => favourite.id === game.id)) {
            setFavouritesList(favouritesList.filter(favourite => favourite.id !== game.id));
        }

        deleteGame(game.id);
        navigate("/games");
    }

    return (
        <section id="gameDetailsCard">
            <fieldset>
                <legend>Game Details</legend>

                <figure>
                    <img src={`../${COVER_URL}/${game.cover}`} alt="Game Cover" />
                </figure>
                
                <article id="gameDetails">
                    <h1>{game.title}</h1>
                    <h2>Category: <p>{game.category}</p></h2>
                    <h2>Released: <p>{game.releaseYear}</p></h2>
                    <h2>Players: <p>{game.players}</p></h2>
                    <h2>Publisher: <p>{game.publisher}</p></h2>
                    <h2>Developer: <p>{game.developer}</p></h2>
                    { user.isAdmin ? <button id="editButton" className="gameButton" onClick={() => navigate(`/editgame/${game.id}`)}>Edit</button> : <></> }
                </article>
                <h3>{game.description}</h3>

                <div className={ user.isAdmin ? "" : "singleButton" }>
                    { user.isAdmin ? <button id="deleteButton" className="gameButton" onClick={() => removeGame()}>Delete</button> : <></> }
                    <FavouriteButton game={game}/>
                </div>
            </fieldset>
        </section>
    );
}
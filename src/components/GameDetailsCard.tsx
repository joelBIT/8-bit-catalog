import { ReactElement, useContext, useState } from "react";
import { Game } from "../interfaces";
import { FavouriteButton, Modal } from ".";
import { deleteGame, getActiveUser } from "../data";
import { FavouritesContext } from "../contexts/FavouritesContextProvider";
import { useNavigate } from "react-router-dom";
import { COVER_URL, URL_EDIT_GAME_DETAILS_PAGE, URL_SEARCH_PAGE } from "../utils";

export function GameDetailsCard({game}: {game: Game}): ReactElement {
    const {favouritesList, setFavouritesList} = useContext(FavouritesContext);
    const navigate = useNavigate();
    const [ showModal, setShowModal ] = useState<boolean>(false);

    /**
     * When a game is deleted it is first removed from the favourites list (if being a favourite) and
     * then deleted from local storage. When the game is deleted the user is redirected to the search page.
     */
    function removeGame(): void {
        if (favouritesList.some(favourite => favourite.id === game.id)) {
            setFavouritesList(favouritesList.filter(favourite => favourite.id !== game.id));
        }

        deleteGame(game.id);
        navigate(URL_SEARCH_PAGE);
    }

    return (
        <section id="gameDetailsCard">
            <figure>
                <img src={`../${COVER_URL}/${game.cover}`} alt="Game Cover" />
            </figure>
            
            <article id="gameDetails">
                <h1>{game.title}</h1>
                <h2>Category: <p>{game.category}</p></h2>
                <h2>Released: <p>{game.releaseDate ? game.releaseDate : game.releaseYear}</p></h2>
                <h2>Players: <p>{game.players}</p></h2>
                <h2>Publisher: <p>{game.publisher}</p></h2>
                <h2>Developer: <p>{game.developer}</p></h2>
                { getActiveUser().isAdmin ? <button 
                                                id="editButton" 
                                                className="gameButton" 
                                                onClick={() => navigate(`${URL_EDIT_GAME_DETAILS_PAGE}/${game.id}`)}>
                                                    Edit
                                            </button> : <></> }
            </article>

            <article id="description">
                { game.description ? game.description.map((paragraph, index) => <p key={index}>{paragraph}</p>) : <></> }
            </article>
            
            <div className={ getActiveUser().isAdmin ? "" : "singleButton" }>
                { getActiveUser().isAdmin ? <button 
                                                id="deleteButton" 
                                                className="gameButton" 
                                                onClick={() => setShowModal(true)}>
                                                    Delete
                                            </button> : <></> }
                <FavouriteButton game={game}/>
                { showModal ? <Modal title={game.title} showModal={setShowModal} confirm={() => removeGame()} /> : <></> }
            </div>
        </section>
    );
}
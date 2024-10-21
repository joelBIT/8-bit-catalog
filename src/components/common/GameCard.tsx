import { ReactElement } from "react";
import { Game } from "../../interfaces";
import { Link } from "react-router-dom";
import { COVER_URL, URL_GAME_DETAILS_PAGE } from "../../utils";
import { FavouriteButton } from "..";

/**
 * Represents a card containing information about a game. The card is clickable so that
 * a user can navigate to the game's detail page if interested. It is also possible to
 * add a game card to the list of favourite games.
 * 
 * @param game          a game
 * @returns             a clickable card with game information
 */
export function GameCard({ game }: { game: Game }): ReactElement {
    return (
        <Link to={`${URL_GAME_DETAILS_PAGE}/${game.id}`}>
            <section className="gameCard">
                <figure>
                    <img src={`${COVER_URL}/${game.cover}`} />
                </figure>
                <article id="gameCardTitle">
                    <h1>{game.title}</h1>
                    <FavouriteButton game={game} />
                </article>
            </section>
        </Link>
    );
}
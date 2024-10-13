import { ReactElement } from "react";
import { Game } from "../interfaces";
import { FavouriteButton } from "./FavouriteButton";
import { Link } from "react-router-dom";
import { COVER_URL, URL_GAME_DETAILS_PAGE } from "../utils";

export function GameCard( {game}: {game: Game}): ReactElement {
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
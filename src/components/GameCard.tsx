import { ReactElement } from "react";
import { Game } from "../interfaces";
import { FavouriteButton } from "./FavouriteButton";
import { Link } from "react-router-dom";

export function GameCard( {game}: {game: Game}): ReactElement {
    return (
        <Link to={`/gamedetails/${game.id}`}>
            <section className="gameCard">
                <figure>
                    <img src={`src/assets/covers/${game.cover}`} />
                </figure>
                <article id="gameCardTitle">
                    <h1>{game.title}</h1>
                    <FavouriteButton game={game} />
                </article>
            </section>
        </Link>
    );
}
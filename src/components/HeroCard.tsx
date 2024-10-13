import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { COVER_URL, URL_GAME_DETAILS_PAGE } from "../utils";
import { Game } from "../interfaces";

export function HeroCard({ game }: { game: Game }): ReactElement {
    return (
        <section id="heroCard">
            <article>
                <h1>{game.title}</h1>
                <Link to={`${URL_GAME_DETAILS_PAGE}/${game.id}`}>View Game</Link>
            </article>
            
            <figure>
                <img src={`${COVER_URL}/${game.cover}`} alt="Random Game Cover" />
            </figure>
        </section>
    );
}
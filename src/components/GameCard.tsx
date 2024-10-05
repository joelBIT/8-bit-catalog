import { ReactElement } from "react";
import { Game } from "../interfaces";

export function GameCard( {game}: {game: Game}): ReactElement {
    return (
        <section className="gameCard">
            <figure>
                <img src={`src/assets/covers/${game.cover}`} />
            </figure>
            <article id="gameCardTitle">
                <h1>{game.title}</h1>
                <button onClick={() => console.log('favourite')}>Like</button>
            </article>
        </section>
    );
}
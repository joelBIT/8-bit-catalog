import { ReactElement } from "react";
import { Game } from "../interfaces";
import { FavouriteButton } from ".";

export function GameDetailsCard({game}: {game: Game}): ReactElement {

    return (
        <section id="gameDetailsCard">
            <fieldset>
                <legend>Game Details</legend>

                <figure>
                    <img src={`../src/assets/covers/${game.cover}`} alt="Game Cover" />
                </figure>
                
                <article id="gameDetails">
                    <h1>{game.title}</h1>
                    <h2>Category: <p>{game.category}</p></h2>
                    <h2>Released: <p>{game.releaseYear}</p></h2>
                    <h2>Players: <p>{game.players}</p></h2>
                    <h2>Publisher: <p>{game.publisher}</p></h2>
                    <h2>Developer: <p>{game.developer}</p></h2>
                </article>
                <h3>{game.description}</h3>

                <FavouriteButton game={game} />
            </fieldset>
        </section>
    );
}
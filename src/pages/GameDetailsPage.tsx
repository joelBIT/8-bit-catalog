import { ReactElement } from "react";
import { GameDetailsCard } from "../components/GameDetailsCard";
import { useLoaderData } from "react-router-dom";
import { Game } from "../interfaces";

export function GameDetailsPage(): ReactElement {
    const game = useLoaderData() as Game;

    return (
        <main id="gameDetailsPage">
            <GameDetailsCard game={game}/>
        </main>
    );
}
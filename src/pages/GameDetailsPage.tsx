import { ReactElement } from "react";
import { GameDetailsCard } from "../components/GameDetailsCard";
import { useLoaderData } from "react-router-dom";
import { Game } from "../interfaces";
import { FieldSetFrame } from "../components";

export function GameDetailsPage(): ReactElement {
    const game = useLoaderData() as Game;

    return (
        <main id="gameDetailsPage">
            <FieldSetFrame legend={"Game Details"} body={<GameDetailsCard game={game}/>} />
        </main>
    );
}
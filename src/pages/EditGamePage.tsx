import { ReactElement } from "react";
import { EditGameForm } from "../components";
import { Game } from "../interfaces";
import { useLoaderData } from "react-router-dom";

export function EditGamePage(): ReactElement {
    const game = useLoaderData() as Game;
    
    return (
        <main id="editGamePage">
            <EditGameForm game={game} />
        </main>
    );
}
import { ReactElement } from "react";
import { EditGameForm, FieldSetFrame } from "../components";
import { Game } from "../interfaces";
import { useLoaderData } from "react-router-dom";

export function EditGamePage(): ReactElement {
    const game = useLoaderData() as Game;
    
    return (
        <main id="editGamePage">
            <FieldSetFrame legend={"Edit Details"} body={<EditGameForm game={game} />} />
        </main>
    );
}
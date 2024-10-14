import { ReactElement } from "react";
import { GameForm } from "..";
import { storeGame } from "../../data";

export function AddGameTab(): ReactElement {

    return (
        <section id="addGameTab">
            <h1>Add Game</h1>
            <GameForm 
                buttonClass="accountButton" 
                onSubmit={storeGame}
                errorText="Could not add new game"
                successText="Game successfully added"
            />
        </section>
    );
}
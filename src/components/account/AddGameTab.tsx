import { ReactElement } from "react";
import { GameForm } from "..";
import { storeGame } from "../../data/game";

export function AddGameTab(): ReactElement {

    return (
        <section id="addGameTab">
            <h1 id="addGameHeading">Add Game</h1>
            <GameForm 
                buttonClass="accountButton" 
                onSubmit={storeGame}
                errorText="Could not add new game"
                successText="Game successfully added"
            />
        </section>
    );
}
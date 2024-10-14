import { ReactElement } from "react";
import { GameForm } from "..";
import { storeGame } from "../../data";

export function AddGameTab(): ReactElement {

    return (
        <section id="addGameInformation">
            <h1>Add Game</h1>
            <GameForm buttonClass={"accountButton"} handleGame={storeGame}/>
        </section>
    );
}
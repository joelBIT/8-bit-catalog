import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { Select } from ".";
import { createFilterList, fileTypes, getPlayersList } from "../utils";
import { createGame, generateGameId, storeGame } from "../data";

export function AddGameForm(): ReactElement {
    const [ players, setPlayers ] = useState<string>("1");
    const [ category, setCategory ] = useState<string>("Action");
    const [ file, setFile ] = useState<File | null>(null);
    const [ message, setMessage ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    function saveChanges(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const game = createGame(generateGameId(), form.gameTitle.value, category, form.publisher.value, 
                                        form.developer.value, form.releaseDate.value.substring(0, 4), form.description.value, parseInt(players));
            storeGame(game);
            setMessage("Game successfully added");
            setTimeout(() => setMessage(""), 5000);
        } catch (error: any) {
            setErrorMessage(error.message);
            setTimeout(() => setErrorMessage(""), 5000);
        }

        resetForm(form);
    }

    function resetForm(form: HTMLFormElement) {
        form.developer.value = "";
        form.gameTitle.value = "";
        form.description.value = "";
        form.publisher.value = "";
    }

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    return (
        <section id="addGameInformation">
            <h1 id="addGameHeading">Add Game</h1>
            <form id="addGameForm" onSubmit={event => saveChanges(event)}>
  
                <input id="gameTitle" type="text" placeholder="Game title" autoComplete="false" required />
                <input id="developer" type="text" placeholder="Developer" autoComplete="false" required />
                <input id="publisher" type="text" placeholder="Publisher" autoComplete="false" required />
                <Select title={"Category"} list={createFilterList("category")} defaultOption={false} getOption={setCategory} />
                <textarea id="description" form="addGameForm" placeholder="Description" autoComplete="false" required />

                <section id="coverSection">
                    <h2>Cover</h2>
                    <input id="gameCover" type="file" accept={fileTypes.toString()} onChange={handleFile} required />
                </section>

                <Select title={"Players"} list={getPlayersList()} defaultOption={false} getOption={setPlayers} />

                <section id="releasedSection">
                    <h2>Released</h2>
                    <input id="releaseDate" type="date" required />
                </section>
                
                <button type="submit">Save</button>
            </form>

            { message ? <h1 id="message">{message}</h1> : <></> }
            { errorMessage ? <h1 id="errorMessage">{errorMessage}</h1> : <></> }
        </section>
    );
}
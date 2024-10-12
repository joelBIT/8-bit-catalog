import { FormEvent, ReactElement, useState } from "react";
import { FileInput, Select } from "..";
import { ACTION_OPTION_VALUE, createFilterList, createParagraphs, generateGameId, getPlayersList } from "../../utils";
import { createGame, storeGame } from "../../data";
import { DateInput } from "../DateInput";

export function AddGameForm(): ReactElement {
    const [ players, setPlayers ] = useState<string>("1");
    const [ category, setCategory ] = useState<string>("Action");
    const [ date, setDate ] = useState<string>("");
    const [ file, setFile ] = useState<File | null>(null);
    const [ message, setMessage ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    function saveChanges(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const description = createParagraphs(form.description.value);
            const game = createGame(generateGameId(), form.gameTitle.value, category, form.publisher.value, 
                                        form.developer.value, parseInt(date.slice(0, 4)), date, description, parseInt(players));
            storeGame(game);
            setMessage("Game successfully added");
            setTimeout(() => setMessage(""), 5000);
        } catch (error: any) {
            setErrorMessage("Could not create new game");
            setTimeout(() => setErrorMessage(""), 5000);
        }

        form.reset();
        setDate("");
    }

    return (
        <section id="addGameInformation">
            <h1>Add Game</h1>
            <form id="addGameForm" onSubmit={event => saveChanges(event)}>
                <input id="gameTitle" type="text" placeholder="Game title" autoComplete="false" required />
                <input id="developer" type="text" placeholder="Developer" autoComplete="false" required />
                <input id="publisher" type="text" placeholder="Publisher" autoComplete="false" required />

                <Select title={"Category"} list={createFilterList("category")} defaultOption={ACTION_OPTION_VALUE} getOption={setCategory} />
                <textarea id="description" form="addGameForm" placeholder="Description" autoComplete="false" required />

                <FileInput id={"gameCover"} label={"Cover"} setFile={setFile} />
                <Select title={"Players"} list={getPlayersList()} defaultOption={getPlayersList()[0]} getOption={setPlayers} />
                <DateInput id={"releaseDate"} label={"Released"} value={date} setDate={setDate} />
                
                { message ? <h4 className="successMessage">{message}</h4> : <></> }
                { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }
                <button className="accountButton" type="submit">Save</button>
            </form>
        </section>
    );
}
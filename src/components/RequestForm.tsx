import { FormEvent, ReactElement, useState } from "react";
import { DateInput } from "./DateInput";
import { ACTION_OPTION_VALUE, createFilterList, createParagraphs, generateGameId, getPlayersList } from "../utils";
import { FileInput, Select } from ".";
import { createGame, createRequest } from "../data";

export function RequestForm(): ReactElement {
    const [ players, setPlayers ] = useState<string>("1");
    const [ category, setCategory ] = useState<string>("Action");
    const [ date, setDate ] = useState<string>("");
    const [ file, setFile ] = useState<File | null>(null);
    const [ message, setMessage ] = useState<string>("");
    const [ errorMessage, setErrorMessage ] = useState<string>("");
    
    function submit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const description = createParagraphs(form.description.value);
            const game = createGame(generateGameId(), form.gameTitle.value, category, form.publisher.value, 
                                        form.developer.value, parseInt(date.slice(0, 4)), date, description, parseInt(players));
            
            createRequest(game);
            setMessage("Request successfully created");
            setTimeout(() => setMessage(""), 5000);
        } catch (error: any) {
            setErrorMessage("Could not create request");
            setTimeout(() => setErrorMessage(""), 5000);
        }

        form.reset();
        setDate("");
    }

    return (
        <form id="createRequestForm" onSubmit={submit}>
            <input 
                id="gameTitle" 
                type="text" 
                placeholder="Game title" 
                autoComplete="false" 
                required 
            />
            <input 
                id="developer" 
                type="text" 
                placeholder="Developer" 
                autoComplete="false" 
                required 
            />
            <input 
                id="publisher" 
                type="text" 
                placeholder="Publisher" 
                autoComplete="false" 
                required 
            />

            <Select 
                title={"Category"} 
                list={createFilterList("category")} 
                defaultOption={ACTION_OPTION_VALUE} 
                getOption={setCategory} 
            />

            <textarea 
                id="description" 
                form="createRequestForm" 
                placeholder="Description" 
                autoComplete="false" 
                required 
            />

            <FileInput id={"gameCover"} label={"Cover"} setFile={setFile} />

            <Select 
                title={"Players"} 
                list={getPlayersList()} 
                defaultOption={getPlayersList()[0]} 
                getOption={setPlayers} 
            />

            <DateInput id={"releaseDate"} label={"Released"} value={date} setDate={setDate} />
            
            { message ? <h4 className="successMessage">{message}</h4> : <></> }
            { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }

            <button id="submitButton" className="gameButton" type="submit">Submit</button>
        </form>
    );
}
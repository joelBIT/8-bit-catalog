import { FormEvent, ReactElement, useState } from "react";
import { FileInput, Input, SelectPlayers } from ".";
import { ACTION_OPTION_VALUE, createParagraphs, generateGameId, getPlayersList } from "../utils";
import { DateInput } from "./DateInput";
import { createGame } from "../data";
import { Game } from "../interfaces";
import { SelectCategory } from "./SelectCategory";

export function GameForm({ buttonClass, onSubmit, errorText, successText }: { buttonClass: string, onSubmit: (game: Game) => void, errorText: string, successText: string }): ReactElement {
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
            
            onSubmit(game);
            setMessage(successText);
            setTimeout(() => setMessage(""), 5000);
        } catch (error: any) {
            setErrorMessage(errorText);
            setTimeout(() => setErrorMessage(""), 5000);
        }

        form.reset();
        setDate("");
    }

    return (
        <form id="gameForm" onSubmit={submit}>
            <Input id="gameTitle" type="text" placeholder="Game title" />
            <Input id="developer" type="text" placeholder="Developer" />
            <Input id="publisher" type="text" placeholder="Publisher" />

            <SelectCategory defaultOption={ACTION_OPTION_VALUE} setCategory={setCategory} />

            <textarea 
                id="description" 
                form="gameForm" 
                placeholder="Description" 
                autoComplete="false" 
                required 
            />

            <FileInput id="gameCover" label="Cover" setFile={setFile} />

            <SelectPlayers defaultOption={getPlayersList()[0]} setPlayers={setPlayers} />

            <DateInput id="releaseDate" label="Released" value={date} setDate={setDate} />
            
            { message ? <h4 className="successMessage">{message}</h4> : <></> }
            { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }

            <button id="submitButton" className={buttonClass} type="submit">Submit</button>
        </form>
    );
}
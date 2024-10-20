import { FormEvent, ReactElement, useState } from "react";
import { DateInput, DescriptionInput, DeveloperInput, FileInput, PublisherInput, SelectCategory, SelectPlayers, TitleInput } from "..";
import { ACTION_OPTION_VALUE, createParagraphs, generateGameId, getPlayersList } from "../../utils";
import { createGame } from "../../data/game";
import { Game } from "../../interfaces";

export function GameForm({ buttonClass, onSubmit, errorText, successText }: { buttonClass: string, onSubmit: (game: Game) => void, errorText: string, successText: string }): ReactElement {
    const [ players, setPlayers ] = useState<string>("1");
    const [ category, setCategory ] = useState<string>(ACTION_OPTION_VALUE);
    const [ date, setDate ] = useState<string>("");
    const [ file, setFile ] = useState<File | null>(null);
    const [ message, setMessage ] = useState<string>("");
    const [ errorMessage, setErrorMessage ] = useState<string>("");

    /**
     * When the form is submitted a new game is created based on the supplied form input values. This newly created game
     * is then used as an argument to a supplied function so that the form can be used for various purposes.
     */
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
            <TitleInput />
            <DeveloperInput />
            <PublisherInput />

            <SelectCategory defaultOption={ACTION_OPTION_VALUE} setCategory={setCategory} />

            <DescriptionInput form="gameForm" />
            <FileInput id="gameCover" label="Cover" setFile={setFile} />

            <SelectPlayers defaultOption={getPlayersList()[0]} setPlayers={setPlayers} />

            <DateInput id="releaseDate" label="Released" value={date} setDate={setDate} />
            
            { message ? <h4 className="successMessage">{message}</h4> : <></> }
            { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }

            <button id="submitButton" className={buttonClass} type="submit">Submit</button>
        </form>
    );
}
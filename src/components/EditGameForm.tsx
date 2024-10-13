import { FormEvent, ReactElement, useState } from "react";
import { Game } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { FileInput, Select } from ".";
import { createFilterList, createParagraphs, getPlayersList, joinParagraphs } from "../utils";
import { updateGame } from "../data";
import { DateInput } from "./DateInput";

export function EditGameForm({ game }: { game: Game }): ReactElement {
    const navigate = useNavigate();
    const [ players, setPlayers ] = useState<number>(game.players);
    const [ category, setCategory ] = useState<string>(game.category);
    const [ title, setTitle ] = useState<string>(game.title);
    const [ file, setFile ] = useState<File>();
    const [ date, setDate ] = useState<string>(game.releaseDate);
    const [ year ] = useState<number>(game.releaseYear);
    const [ developer, setDeveloper ] = useState<string>(game.developer);
    const [ publisher, setPublisher ] = useState<string>(game.publisher);
    const [ description, setDescription ] = useState<string>(joinParagraphs(game.description));

    /**
     * Updates all Game properties and store the updated game in the list of all games. Then a
     * user is redirected to the details page of the updated game.
     */
    function saveChanges(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        game.title = title;
        game.category = category;
        game.players = players;
        game.description = createParagraphs(description);
        game.developer = developer;
        game.publisher = publisher;
        game.releaseDate = date;

        updateGame(game);
        navigate(`/gamedetails/${game.id}`);
    }

    function handlePlayers(players: string): void {
        setPlayers(parseInt(players));
    }

    function getDate(): string {
        return date ? date : `${year}-01-01`;
    }
    
    return (
        <form id="editGameForm" onSubmit={event => saveChanges(event)}>
            <input 
                id="gameTitle" 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Game title" 
                autoComplete="false" 
                required 
            />
            <input 
                id="developer" 
                type="text" 
                value={developer} 
                onChange={(e) => setDeveloper(e.target.value)} 
                placeholder="Developer" 
                autoComplete="false" 
                required 
            />
            <input 
                id="publisher" 
                type="text" 
                value={publisher} 
                onChange={(e) => setPublisher(e.target.value)} 
                placeholder="Publisher" 
                autoComplete="false" 
                required 
            />

            { category ? <Select 
                            title={"Category"} 
                            list={createFilterList("category")} 
                            defaultOption={category} 
                            getOption={setCategory} 
                        /> : <></> }
            
            <textarea 
                id="description" 
                form="addGameForm" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                autoComplete="false" 
                required 
            />

            <FileInput id={"gameCover"} label={"Cover"} setFile={setFile} />

            { players ? <Select 
                            title={"Players"} 
                            list={getPlayersList()} 
                            defaultOption={players.toString()} 
                            getOption={handlePlayers} 
                        /> : <></> }
            
            <DateInput id={"releaseDate"} label={"Released"} value={getDate()} setDate={setDate} />
            
            <div>
                <button id="cancelButton" className="gameButton" type="button" onClick={() => navigate(`/gamedetails/${game.id}`)}>Cancel</button>
                <button id="saveButton" className="gameButton" type="submit">Save</button>
            </div>
        </form>
    );
}
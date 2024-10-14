import { FormEvent, ReactElement, useState } from "react";
import { Game } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { EditDeveloper, EditPublisher, EditTitle, FileInput, Select } from "..";
import { createFilterList, createParagraphs, getPlayersList, joinParagraphs, URL_GAME_DETAILS_PAGE } from "../../utils";
import { updateGame } from "../../data";
import { DateInput } from "../DateInput";
import { EditDescription } from "./EditDescription";

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
        navigate(`${URL_GAME_DETAILS_PAGE}/${game.id}`);
    }

    function handlePlayers(players: string): void {
        setPlayers(parseInt(players));
    }

    function getDate(): string {
        return date ? date : `${year}-01-01`;
    }
    
    return (
        <form id="editGameForm" onSubmit={saveChanges}>
            <EditTitle title={title} setTitle={setTitle} />
            <EditDeveloper developer={developer} setDeveloper={setDeveloper} />
            <EditPublisher publisher={publisher} setPublisher={setPublisher} />

            { category ? <Select 
                            title="Category"
                            list={createFilterList("category")} 
                            defaultOption={category} 
                            getOption={setCategory} 
                        /> : <></> }
            
            <EditDescription description={description} form="editGameForm" setDescription={setDescription} />

            <FileInput id="gameCover" label="Cover" setFile={setFile} />

            { players ? <Select 
                            title="Players"
                            list={getPlayersList()} 
                            defaultOption={players.toString()} 
                            getOption={handlePlayers} 
                        /> : <></> }
            
            <DateInput id="releaseDate" label="Released" value={getDate()} setDate={setDate} />
            
            <div>
                <button 
                    id="cancelButton" 
                    className="gameButton" 
                    type="button" 
                    onClick={() => navigate(`${URL_GAME_DETAILS_PAGE}/${game.id}`)}>
                        Cancel
                </button>
                
                <button id="saveButton" className="gameButton" type="submit">Save</button>
            </div>
        </form>
    );
}
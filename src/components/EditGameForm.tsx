import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { Game } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { Select } from ".";
import { createFilterList, fileTypes, getPlayersList } from "../utils";

export function EditGameForm({game}: {game: Game}): ReactElement {
    const navigate = useNavigate();
    const [ players, setPlayers ] = useState<string>(game.players ? game.players.toString() : "1");
    const [ category, setCategory ] = useState<string>(game.category);
    const [ file, setFile ] = useState<File>();

    function saveChanges(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
    }

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }
    
    return (
        <section id="editGameDetails">
            <fieldset>
                <legend>Edit Details</legend>

                <form id="editGameForm" onSubmit={event => saveChanges(event)}>
                    <input id="gameTitle" type="text" value={game.title} placeholder="Game title" autoComplete="false" required />
                    <input id="developer" type="text" value={game.developer} placeholder="Developer" autoComplete="false" required />
                    <input id="publisher" type="text" value={game.publisher} placeholder="Publisher" autoComplete="false" required />
                    <Select title={"Category"} list={createFilterList("category")} defaultOption={false} getOption={setCategory} />
                    <textarea id="description" form="addGameForm" value={game.description} placeholder="Description" autoComplete="false" required />

                    <section id="coverSection">
                        <h2>Cover</h2>
                        <input id="gameCover" type="file" accept={fileTypes.toString()} onChange={handleFile} required />
                    </section>

                    <Select title={"Players"} list={getPlayersList()} defaultOption={false} getOption={setPlayers} />

                    <section id="releasedSection">
                        <h2>Released</h2>
                        <input id="releaseDate" type="date" value={`${game.releaseYear}-01-01`} required />
                    </section>
                    
                    <button id="cancelButton" onClick={() => navigate(`/gamedetails/${game.id}`)}>Cancel</button>
                    <button id="saveButton" type="submit">Save</button>
                </form>
            </fieldset>
        </section>
    );
}
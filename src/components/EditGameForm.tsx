import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from "react";
import { Game } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { Select } from ".";
import { createFilterList, fileTypes, getPlayersList } from "../utils";
import { updateGame } from "../data";

export function EditGameForm({game}: {game: Game}): ReactElement {
    const navigate = useNavigate();
    const [ players, setPlayers ] = useState<string>(String(game.players));
    const [ category, setCategory ] = useState<string>(game.category);
    const [ title, setTitle ] = useState<string>(game.title);
    const [ file, setFile ] = useState<File>();
    const [ date, setDate ] = useState<number>(game.releaseYear);
    const [ developer, setDeveloper ] = useState<string>(game.developer);
    const [ publisher, setPublisher ] = useState<string>(game.publisher);
    const [ description, setDescription ] = useState<string>(game.description);

    useEffect(() => {
        setTitle(game.title);
        setPlayers(String(game.players));
        setCategory(game.category);
        setDate(game.releaseYear);
        setDescription(game.description);
        setDeveloper(game.developer);
        setPublisher(game.publisher);
    }, [game]);

    function saveChanges(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        game.title = title;
        game.category = category;
        game.players = parseInt(players);
        game.description = description;
        game.developer = developer;
        game.publisher = publisher;
        game.releaseYear = date;

        updateGame(game);
        navigate(`/gamedetails/${game.id}`);
    }

    function handleDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        setDescription(event.target.value);
    }

    function handleDeveloper(event: ChangeEvent<HTMLInputElement>) {
        setDeveloper(event.target.value);
    }

    function handlePublisher(event: ChangeEvent<HTMLInputElement>) {
        setPublisher(event.target.value);
    }

    function handleTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    function handleDate(event: ChangeEvent<HTMLInputElement>) {
        setDate(parseInt(event.target.value.slice(0, 4)));
    }
    
    return (
        <section id="editGameDetails">
            <fieldset>
                <legend>Edit Details</legend>

                <form id="editGameForm" onSubmit={event => saveChanges(event)}>
                    <input id="gameTitle" type="text" value={title} onChange={handleTitle} placeholder="Game title" autoComplete="false" required />
                    <input id="developer" type="text" value={developer} onChange={handleDeveloper} placeholder="Developer" autoComplete="false" required />
                    <input id="publisher" type="text" value={publisher} onChange={handlePublisher} placeholder="Publisher" autoComplete="false" required />
                    <Select title={"Category"} list={createFilterList("category")} defaultOption={false} getOption={setCategory} />
                    <textarea id="description" form="addGameForm" value={description} onChange={handleDescription} placeholder="Description" autoComplete="false" required />

                    <section id="coverSection">
                        <h2>Cover</h2>
                        <input id="gameCover" type="file" accept={fileTypes.toString()} onChange={handleFile} required />
                    </section>

                    <Select title={"Players"} list={getPlayersList()} defaultOption={false} getOption={setPlayers} />

                    <section id="releasedSection">
                        <h2>Released</h2>
                        <input id="releaseDate" type="date" value={`${date}-01-01`} onChange={handleDate} required />
                    </section>
                    
                    <button id="cancelButton" type="button" onClick={() => navigate(`/gamedetails/${game.id}`)}>Cancel</button>
                    <button id="saveButton" type="submit">Save</button>
                </form>
            </fieldset>
        </section>
    );
}
import { FormEvent, ReactElement, useState } from "react";
import { Select } from ".";
import { createFilterList } from "../utils";

export function AddGameForm(): ReactElement {
    const [ players, setPlayers ] = useState<string>("1");
    const [ category, setCategory ] = useState<string>("Action");
    const [ message, setMessage ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    function saveChanges(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            setMessage("Game successfully added");
            setTimeout(() => setMessage(""), 5000);
        } catch (error: any) {
            setErrorMessage(error.message);
            resetForm(form);
            setTimeout(() => setErrorMessage(""), 5000);
        }
    }

    function resetForm(form: HTMLFormElement) {
        form.developer.value = "";
        form.gameTitle.value = "";
        form.description.value = "";
        form.publisher.value = "";
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
                    <input id="gameCover" type="file" accept="image/png, image/jpeg, image/webp" required />
                </section>
                
                <Select title={"Players"} list={["1", "2", "3", "4", "5", "6"]} defaultOption={false} getOption={setPlayers} />

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
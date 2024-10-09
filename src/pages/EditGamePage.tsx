import { ReactElement, useEffect, useState } from "react";
import { EditGameForm } from "../components";
import { Game } from "../interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { getGame } from "../data";

export function EditGamePage(): ReactElement {
    const { id } = useParams<string>();
    const [ game, setGame ] = useState<Game>({} as Game);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            try {
                setGame(getGame(parseInt(id)));
            } catch {
                navigate("*");
            }
        }
    }, []);
    
    return (
        <main id="editGamePage">
            <EditGameForm game={game} />
        </main>
    );
}
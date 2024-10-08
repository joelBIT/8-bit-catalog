import { ReactElement, useEffect, useState } from "react";
import { GameDetailsCard } from "../components/GameDetailsCard";
import { useNavigate, useParams } from "react-router-dom";
import { Game } from "../interfaces";
import { getGame } from "../data";

export function GameDetailsPage(): ReactElement {
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
        <main id="gameDetailsPage">
            <GameDetailsCard game={game}/>
        </main>
    );
}
import { ReactElement, useEffect, useState } from "react";
import { HeroCard } from "../components";
import { createGameData, getAllGames } from "../data";
import { Game } from "../interfaces";

export function LandingPage(): ReactElement {
    const [randomGame, setRandomGame] = useState<Game>({} as Game);

    /**
     * A random game is presented to the user every time the landing page is visited. The game
     * data source is created if it does not exist yet. 
     */
    useEffect(() => {
        createGameData();
        addRandomGame();
    }, []);

    /**
     * Retrieves a random game from the list of games and presents it to the user.
     */
    function addRandomGame(): void {
        const games = getAllGames();
        setRandomGame(games[Math.floor(Math.random() * games.length + 1)]);
    }

    return (
        <main id="landingPage">
            <HeroCard id={randomGame.id} title={randomGame.title} cover={randomGame.cover}/>
        </main>
    );
}
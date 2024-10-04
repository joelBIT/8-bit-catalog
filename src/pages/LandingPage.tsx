import { ReactElement, useEffect, useState } from "react";
import games from '../assets/database/nes_games.json';
import { HeroCard } from "../components";
import { createGame } from "../utils";
import { Game } from "../interfaces";

export function LandingPage(): ReactElement {
    const [randomGame, setRandomGame] = useState({} as Game);

    useEffect(() => {
        if (!localStorage.getItem('games')) {
            const cartridges = games.map(game => {
                game.cover = game.cover ? game.cover : "notavailable.jpg";
                game.players = game.players ? game.players : 1;
                return createGame(game);
            });
    
            localStorage.setItem('games', JSON.stringify(cartridges));
        }

        addRandomGame();
    }, []);

    function addRandomGame() {
        const games = localStorage.getItem('games') || "[]";
        const cartridges = JSON.parse(games);
  
        setRandomGame(cartridges[Math.floor(Math.random() * cartridges.length + 1)]);
    }

    return (
        <main id="landingPage">
            <HeroCard id={randomGame.id} title={randomGame.title} cover={randomGame.cover}/>
        </main>
    );
}
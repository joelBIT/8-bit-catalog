import { ReactElement, useEffect } from "react";
import games from '../assets/database/nes_games.json';
import { HeroCard } from "../components";
import { createGame } from "../utils";

export function LandingPage(): ReactElement {

    useEffect(() => {
        if (!localStorage.getItem('games')) {
            const cartridges = games.map(game => {
                return createGame(game);
            });
    
            localStorage.setItem('games', JSON.stringify(cartridges));
        }
    });

    return (
        <main id="landingPage">
            <HeroCard />
        </main>
    );
}
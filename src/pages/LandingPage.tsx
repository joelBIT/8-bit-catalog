import { ReactElement, useEffect } from "react";
import games from '../assets/database/nes_games.json';
import { HeroCard } from "../components";

export function LandingPage(): ReactElement {
    useEffect(() => {
        console.log(games.find(game => game.id === 112));
    });

    return (
        <main id="landingPage">
            <HeroCard />
        </main>
    );
}
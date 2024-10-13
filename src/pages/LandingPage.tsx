import { ReactElement } from "react";
import { HeroCard } from "../components";
import { Game } from "../interfaces";
import { useLoaderData } from "react-router-dom";

/**
 * A random game is presented to the user every time the landing page is visited.
 */
export function LandingPage(): ReactElement {
    const randomGame = useLoaderData() as Game;

    return (
        <main id="landingPage">
            <HeroCard game={randomGame} />
        </main>
    );
}
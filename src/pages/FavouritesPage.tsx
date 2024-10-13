import { ReactElement, useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContextProvider";
import { GameCard } from "../components";

export function FavouritesPage(): ReactElement {
    const {favouritesList} = useContext(FavouritesContext);

    return (
        <main id="favouritesPage">
            <section id="gameCards">
                { favouritesList.map((game, index) => <GameCard key={index} game={game} />) }
            </section>
        </main>
    );
}
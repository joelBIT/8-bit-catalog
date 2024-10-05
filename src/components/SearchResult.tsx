import { ReactElement } from "react";
import { Game } from "../interfaces";
import { GameCard } from "./GameCard";

export function SearchResult( {result, showHeading}: {result: Game[], showHeading: boolean} ): ReactElement {
    return (
        <section id="searchResult">
            {showHeading ? <h1 id="resultHeading">Games found: {result.length}</h1> : <></>}
            <section id="gameCards">
                {result.map((game, index) => <GameCard key={index} game={game} />)}
            </section>
        </section>
    );
}
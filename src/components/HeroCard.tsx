import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function HeroCard({title, cover, id}: {title: string, cover: string, id: number}): ReactElement {
    return (
        <section id="heroCard">
            <article>
                <h1>{title}</h1>
                <Link to={`/gamedetails/${id}`}>View Game</Link>
            </article>
            
            <figure>
                <img src={`src/assets/covers/${cover}`} alt="Random Game Cover" />
            </figure>
        </section>
    );
}
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function HeroCard(): ReactElement {
    return (
        <section id="heroCard">
            <article>
                <h1>Battle Toads</h1>
                <Link to="/gamedetails/112">View Game</Link>
            </article>
            
            <figure>
                <img src="src/assets/covers/NES-8T-USA.webp" alt="Random Game Cover" />
            </figure>
        </section>
    );
}
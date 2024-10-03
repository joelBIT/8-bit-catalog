import { ReactElement } from "react";

export function Contact(): ReactElement {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <ul>
                <li>
                    <h4><span className="material-symbols-outlined mail">mail</span> joel.rollny@gmail.com</h4>
                </li>
                <li>
                    <h4><span className="material-symbols-outlined globe">globe</span> www.joel-rollny.eu</h4>
                </li>
                <li>
                    <h4><span className="material-symbols-outlined location">location_on</span> Karlstad, Sweden</h4>
                </li>
            </ul>
        </section>
    );
}
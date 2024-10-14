import { ReactElement } from "react";

export function Contact(): ReactElement {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <ul>
                <li>
                    <h4>
                        <span className="material-symbols-outlined mail">mail</span>
                        <a href="mailto:joel.rollny@gmail.com">joel.rollny@gmail.com</a>
                    </h4>
                </li>
                <li>
                    <h4>
                        <span className="material-symbols-outlined globe">globe</span> 
                        <a href="http://www.joel-rollny.eu" target="_blank">www.joel-rollny.eu</a>
                    </h4>
                </li>
                <li>
                    <h4><span className="material-symbols-outlined location">location_on</span> Karlstad, Sweden</h4>
                </li>
            </ul>
        </section>
    );
}
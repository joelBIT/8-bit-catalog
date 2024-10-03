import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export function NavBar(): ReactElement {
    return (
        <nav id="navbar">
            <ul>
                <li>
                    <NavLink to="/games">
                        <h2>Games</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/request">
                        <h2>Request</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favourites">
                        <h2>Favourites</h2>
                    </NavLink>
                </li>
                <li className="loginIconElement">
                    <NavLink className="loginLink" to="/login">
                        <span className="material-symbols-outlined">login</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
import { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";

export function NavBar(): ReactElement {
    const {isAuthenticated} = useContext(AuthContext);
    
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
                <li className="iconElement">
                    <NavLink className="loginLink" to={isAuthenticated ? "/logout" : "/login"}>
                        <span className="material-symbols-outlined">{isAuthenticated ? "logout" : "login"}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
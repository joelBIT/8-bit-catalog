import { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";

export function NavBar(): ReactElement {
    const { user } = useContext(AuthContext);
    
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

                { user.isAuthenticated ? <li><NavLink to={`/account/${user.id}`}>
                                            <span className="material-symbols-outlined">account_circle</span>
                                        </NavLink>
                                    </li> : <></> }

                <li className="iconElement">
                    <NavLink className="loginLink" to={user.isAuthenticated ? "/logout" : "/login"}>
                        <span className="material-symbols-outlined">{user.isAuthenticated ? "logout" : "login"}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
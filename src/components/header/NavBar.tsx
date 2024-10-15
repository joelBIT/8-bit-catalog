import { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { URL_ACCOUNT_PAGE, URL_FAVOURITES_PAGE, URL_LOGIN_PAGE, URL_LOGOUT_PAGE, URL_REQUEST_PAGE, URL_SEARCH_PAGE } from "../../utils";

export function NavBar(): ReactElement {
    const { user } = useContext(AuthContext);
    
    return (
        <nav id="navbar">
            <ul>
                <li>
                    <NavLink to={URL_SEARCH_PAGE}>
                        <h2>Games</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={URL_REQUEST_PAGE}>
                        <h2>Request</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={URL_FAVOURITES_PAGE}>
                        <h2>Favourites</h2>
                    </NavLink>
                </li>

                { user.isAuthenticated ? <li><NavLink to={`${URL_ACCOUNT_PAGE}/${user.id}`}>
                                            <span className="material-symbols-outlined">account_circle</span>
                                        </NavLink>
                                    </li> : <></> }

                <li className="iconElement">
                    <NavLink className="loginLink" to={user.isAuthenticated ? URL_LOGOUT_PAGE : URL_LOGIN_PAGE}>
                        <span className="material-symbols-outlined">{user.isAuthenticated ? "logout" : "login"}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
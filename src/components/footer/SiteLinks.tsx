import { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";
import { URL_ABOUT_PAGE, URL_ACCOUNT_PAGE, URL_HOME, URL_LOGIN_PAGE } from "../../utils";

export function SiteLinks(): ReactElement {
    const { user } = useContext(AuthContext);

    return (
        <section id="siteLinks">
            <h2>Site Links</h2>
            <ul>
                <li>
                    <NavLink to={URL_HOME}>
                        <h4>Home</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={URL_ABOUT_PAGE}>
                        <h4>About</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={user.isAuthenticated ? `${URL_ACCOUNT_PAGE}/${user.id}` : URL_LOGIN_PAGE}>
                        <h4>Account</h4>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}
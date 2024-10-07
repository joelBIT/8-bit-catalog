import { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";

export function SiteLinks(): ReactElement {
    const { user } = useContext(AuthContext);

    return (
        <section id="siteLinks">
            <h2>Site Links</h2>
            <ul>
                <li>
                    <NavLink to="/">
                        <h4>Home</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <h4>About</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={user.isAuthenticated ? `/account/${user.id}` : "/login"}>
                        <h4>Account</h4>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}
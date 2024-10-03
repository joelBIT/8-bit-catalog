import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export function SiteLinks(): ReactElement {
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
                    <NavLink to="/login">
                        <h4>Account</h4>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}
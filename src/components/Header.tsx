import { ReactElement } from "react";
import { Logo, NavBar } from ".";
import { NavLink } from "react-router-dom";

export function Header(): ReactElement {
    return (
        <header>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <NavBar />
        </header>
    );
}
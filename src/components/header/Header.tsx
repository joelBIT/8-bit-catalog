import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Logo, NavBar } from "..";

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
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { HamburgerMenu, Logo, NavBar } from "..";

export function Header(): ReactElement {
    return (
        <header>
            <NavLink to="/" id="logoLink">
                <Logo /><h1>The 8-bit Catalog</h1>
            </NavLink>
            <NavBar />
            <HamburgerMenu />
        </header>
    );
}
import { ReactElement } from "react";
import { Logo, NavBar } from ".";

export function Header(): ReactElement {
    return (
        <header>
            <Logo />
            <NavBar />
        </header>
    );
}
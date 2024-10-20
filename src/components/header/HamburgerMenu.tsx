import { ReactElement, useState } from "react";
import { NavBar } from "..";

export function HamburgerMenu(): ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <nav id="hamburger">
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="material-symbols-outlined">{isOpen ? "close" : "menu" }</span>
            </button>
            {isOpen && <div onClick={() => setIsOpen(!isOpen)}><NavBar /></div>}
        </nav>
    );
}
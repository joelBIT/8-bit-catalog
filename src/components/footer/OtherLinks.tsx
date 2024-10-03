import { ReactElement } from "react";

export function OtherLinks(): ReactElement {
    return (
        <section id="otherLinks">
            <h2>Other Links</h2>
            <ul>
                <li>
                    <a href="https://www.nesdev.org/" target="_blank">
                        <h4>NesDev</h4>
                    </a>
                </li>
                <li>
                    <a href="https://nesninja.com/game/nes/" target="_blank">
                        <h4>NES Ninja</h4>
                    </a>
                </li>
                <li>
                    <a href="https://nescartdb.com/" target="_blank">
                        <h4>NesCartDB</h4>
                    </a>
                </li>
                <li>
                    <a href="http://www.romdetectives.com/Wiki/index.php" target="_blank">
                        <h4>ROM Detectives</h4>
                    </a>
                </li>
            </ul>
        </section>
    );
}
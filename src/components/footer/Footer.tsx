import { ReactElement } from "react";
import { Contact, OtherLinks, SiteLinks } from "..";

export function Footer(): ReactElement {
    return (
        <footer>
            <section>
                <SiteLinks />
                <Contact />
                <OtherLinks />
            </section>
            <h4><span className="material-symbols-outlined">copyright</span> 2024 Joel Rollny</h4>
        </footer>
    );
}
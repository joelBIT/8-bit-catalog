import { ReactElement } from "react";
import { Contact, OtherLinks, SiteLinks } from "..";

export function Footer(): ReactElement {
    return (
        <footer>
            <section id="footerComponents">
                <SiteLinks />
                <Contact />
                <OtherLinks />
            </section>
            <h4 id="copyright"><span className="material-symbols-outlined">copyright</span> 2024 Joel Rollny</h4>
        </footer>
    );
}
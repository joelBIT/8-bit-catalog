import { ReactElement } from "react";

export function Forbidden(): ReactElement {
    return (
        <main id="forbiddenPage">
            <h1>You are not allowed to access the page</h1>
        </main>
    );
}
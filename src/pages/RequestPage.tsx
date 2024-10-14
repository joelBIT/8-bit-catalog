import { ReactElement } from "react";
import { FieldSetFrame, GameForm } from "../components";
import { createRequest } from "../data";

export function RequestPage(): ReactElement {
    return (
        <main id="requestPage">
            <FieldSetFrame legend={"Create Request"} body={<GameForm handleGame={createRequest} buttonClass={"gameButton"} />} />
        </main>
    );
}
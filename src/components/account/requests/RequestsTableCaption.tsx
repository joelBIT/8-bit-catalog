import { ReactElement } from "react";
import { GameRequest } from "../../../interfaces";

export function RequestsTableCaption({ text, requests }: { text: string, requests: GameRequest[] }): ReactElement {
    return (
        <caption>
            { requests.length} {text} {requests.length === 1 ? "Request" : "Requests" }
        </caption>
    );
}
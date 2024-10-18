import { ReactElement } from "react";
import { GameRequest } from "../../../interfaces";
import { RequestsTableBody, RequestsTableCaption, RequestsTableHead } from "../..";

export function PendingRequests({ pendingRequests, isAdmin }: { pendingRequests: GameRequest[], isAdmin: boolean }): ReactElement {
    
    return (
        <section id="pendingRequests">
            <table>
                <RequestsTableCaption text="Pending" requests={pendingRequests} />
                <RequestsTableHead isAdmin={isAdmin} />
                <RequestsTableBody isAdmin={isAdmin} isPending={true} requests={pendingRequests} />
            </table>
        </section>
    );
}
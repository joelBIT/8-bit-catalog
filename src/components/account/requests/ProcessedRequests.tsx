import { ReactElement } from "react";
import { GameRequest } from "../../../interfaces";
import { RequestsTableBody, RequestsTableCaption, RequestsTableHead } from "../..";

export function ProcessedRequests({ processedRequests, isAdmin }: { processedRequests: GameRequest[], isAdmin: boolean }): ReactElement {

    return (
        <section id="processedRequests">
            <table>
                <RequestsTableCaption text="Processed" requests={processedRequests} />
                <RequestsTableHead isAdmin={isAdmin} />

                <RequestsTableBody isAdmin={isAdmin} isPending={false} requests={processedRequests} />
            </table>
        </section>
    );
}
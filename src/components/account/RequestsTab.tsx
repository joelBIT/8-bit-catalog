import { ReactElement } from "react";
import { PendingRequests, ProcessedRequests } from "..";

export function RequestsTab(): ReactElement {
    return (
        <section id="requestsTab">
            <h1>Requests</h1>
            
            <PendingRequests />
            <ProcessedRequests />
        </section>
    );
}
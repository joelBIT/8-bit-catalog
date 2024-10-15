import { ReactElement, useState } from "react";
import { PendingRequests, ProcessedRequests } from "..";
import { getAllPendingRequests, getAllProcessedRequests, updateRequest } from "../../data/request";
import { GameRequest } from "../../interfaces";

export function RequestsTab(): ReactElement {
    const [ processedRequests, setProcessedRequests ] = useState<GameRequest[]>(getAllProcessedRequests);
    const [ pendingRequests, setPendingRequests ] = useState<GameRequest[]>(getAllPendingRequests());

    function process(request: GameRequest): void {
        request.status = 'Accepted';
        setPendingRequests([...pendingRequests.filter(pending => pending.id !== request.id)]);
        setProcessedRequests([...processedRequests, request]);
        updateRequest(request);
    }

    return (
        <section id="requestsTab">
            <h1>Requests</h1>
            
            <PendingRequests pendingRequests={pendingRequests} process={process} />
            <ProcessedRequests processedRequests={processedRequests} />
        </section>
    );
}
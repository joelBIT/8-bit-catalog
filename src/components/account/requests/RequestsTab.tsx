import { ReactElement, useState } from "react";
import { PendingRequests, ProcessedRequests } from "../..";
import { getAllPendingRequests, getAllPendingRequestsForUser, getAllProcessedRequests, getAllProcessedRequestsForUser } from "../../../data/request";
import { GameRequest } from "../../../interfaces";
import { getActiveUser } from "../../../data/user";

/**
 * The Requests Tab contains two tables; one for pending requests and one for processed
 * requests. When a pending request has been reviewed and accepted/denied the request
 * is moved to the table of processed requests.
 * 
 * @returns     the Requests Tab
 */
export function RequestsTab(): ReactElement {
    const [ allProcessedRequests ] = useState<GameRequest[]>(getAllProcessedRequests());
    const [ allPendingRequests ] = useState<GameRequest[]>(getAllPendingRequests());
    const [ processedRequests ] = useState<GameRequest[]>(getAllProcessedRequestsForUser(getActiveUser().username));
    const [ pendingRequests ] = useState<GameRequest[]>(getAllPendingRequestsForUser(getActiveUser().username));
    const [ isAdmin ] = useState<boolean>(getActiveUser().isAdmin);

    return (
        <section id="requestsTab">
            <h1>Requests</h1>
            
            <PendingRequests pendingRequests={isAdmin ? allPendingRequests : pendingRequests} isAdmin={isAdmin} />
            <ProcessedRequests processedRequests={isAdmin ? allProcessedRequests : processedRequests} isAdmin={isAdmin} />
        </section>
    );
}
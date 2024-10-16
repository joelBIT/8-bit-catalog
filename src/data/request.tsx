import { Game, GameRequest } from "../interfaces";
import { getActiveUser } from "./user";


export function createRequest(game: Game): void {
    const requests = getAllRequests();

    const request = {
        id: requests.length,
        game: game,
        submitter: getActiveUser(),
        submitted: "2024-10-15",
        status: "Pending"
    }

    requests.push(request);
    storeAllRequests(requests);
}

export function getAllPendingRequests(): GameRequest[] {
    return getAllRequests().filter(request => request.status === 'Pending');
}

export function getAllProcessedRequests(): GameRequest[] {
    return getAllRequests().filter(request => request.status === 'Denied' || request.status === 'Accepted');
}

export function updateRequest(updatedRequest: GameRequest): void {
    const requests = getAllRequests().filter(request => request.id !== updatedRequest.id);
    requests.push(updatedRequest);
    storeAllRequests(requests);
}

export function getAllRequests(): GameRequest[] {
    return JSON.parse(localStorage.getItem('requests') || '[]');
}

export function storeAllRequests(requests: GameRequest[]): void {
    localStorage.setItem('requests', JSON.stringify(requests));
}

export function getRequest(id: number): GameRequest {
    const request = getAllRequests().find(request => request.id === id);

    if (!request) {
        throw new Error(`Could not find request with ID ${id}`);
    }

    return request;
}
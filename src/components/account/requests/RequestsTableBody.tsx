import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { GameRequest } from "../../../interfaces";
import { URL_REVIEW_PAGE } from "../../../utils";

export function RequestsTableBody( { isAdmin, isPending, requests }: { isAdmin: boolean, isPending: boolean, requests: GameRequest[] }): ReactElement {
    const navigate = useNavigate();
    
    return (
        <tbody>
            { requests.map((request, index) => 
                <tr key={index}>
                    <td>{request.game.title}</td>
                    <td>{request.submitted}</td>
                    { isAdmin ? <td>{request.submitter.username}</td> : <></> }
                    <td>{request.status}</td>
                    { isAdmin && isPending? <td><button 
                                                    className="gameButton" 
                                                    onClick={() => navigate(`${URL_REVIEW_PAGE}/${request.id}`)}>
                                                        Review
                                                </button></td> : <></> }
                </tr>
            )}
        </tbody>
    );
}
import { ReactElement } from "react";
import { GameRequest } from "../../interfaces";
import { URL_REVIEW_PAGE } from "../../utils";
import { useNavigate } from "react-router-dom";

export function PendingRequests({ pendingRequests }: { pendingRequests: GameRequest[] }): ReactElement {
    const navigate = useNavigate();
    
    return (
        <section id="pendingRequests">
            <table>
                <caption>
                    {pendingRequests.length} Pending Requests
                </caption>

                { pendingRequests.length > 0 ? <thead>
                                                    <tr>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Submitted</th>
                                                        <th scope="col">Submitter</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead> : <></> }

                <tbody>
                    { pendingRequests.map((request, index) => 
                        <tr key={index}>
                            <td>{request.game.title}</td>
                            <td>{request.submitted}</td>
                            <td>{request.submitter.username}</td>
                            <td>{request.status}</td>
                            <td><button className="gameButton" onClick={() => navigate(`${URL_REVIEW_PAGE}/${request.id}`)}>Review</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}
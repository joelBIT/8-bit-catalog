import { ReactElement, useState } from "react";
import { getAllPendingRequests } from "../../data";

export function PendingRequests(): ReactElement {
    const [ pendingRequests ] = useState(getAllPendingRequests());

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
                            <td><button className="gameButton" onClick={() => console.log('review')}>Review</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}
import { ReactElement } from "react";
import { GameRequest } from "../../interfaces";

export function ProcessedRequests({ processedRequests, isAdmin }: { processedRequests: GameRequest[], isAdmin: boolean }): ReactElement {

    return (
        <section id="processedRequests">
            <table>
                <caption>
                    {processedRequests.length} Processed {processedRequests.length === 1 ? "Request" : "Requests" }
                </caption>

                { processedRequests.length > 0 ? <thead>
                                                    <tr>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Submitted</th>
                                                        { isAdmin ? <th scope="col">Submitter</th> : <></> }
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead> : <></> }

                <tbody>
                    { processedRequests.map((request, index) => 
                        <tr key={index}>
                            <td>{request.game.title}</td>
                            <td>{request.submitted}</td>
                            { isAdmin ? <td>{request.submitter.username}</td> : <></> }
                            <td>{request.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}
import { ReactElement } from "react";
import { GameRequest } from "../../interfaces";

export function ProcessedRequests({ processedRequests }: { processedRequests: GameRequest[] }): ReactElement {

    return (
        <section id="processedRequests">
            <table>
                <caption>
                    {processedRequests.length} Processed Requests
                </caption>

                { processedRequests.length > 0 ? <thead>
                                                    <tr>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Submitted</th>
                                                        <th scope="col">Submitter</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead> : <></> }

                <tbody>
                    { processedRequests.map((request, index) => 
                        <tr key={index}>
                            <td>{request.game.title}</td>
                            <td>{request.submitted}</td>
                            <td>{request.submitter.username}</td>
                            <td>{request.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}
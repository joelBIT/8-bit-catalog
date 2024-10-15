import { ReactElement } from "react";

export function PendingRequests(): ReactElement {
    return (
        <section id="pendingRequests">
            <table>
                <caption>
                    4 Pending Requests
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Submitted</th>
                        <th scope="col">Submitter</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Some Title</td>
                        <td>2022-12-20</td>
                        <td>NesHero</td>
                        <td>Pending</td>
                        <td><button className="gameButton">Review</button></td>
                    </tr>
                    <tr>
                        <td>Some other rom</td>
                        <td>2023-04-12</td>
                        <td>NEsKong</td>
                        <td>Pending</td>
                        <td><button className="gameButton">Review</button></td>
                    </tr>
                    <tr>
                        <td>Battle of something</td>
                        <td>1993-02-01</td>
                        <td>BotGood</td>
                        <td>Review</td>
                        <td><button className="gameButton">Review</button></td>
                    </tr>
                    <tr>
                        <td>Marios ROM activities</td>
                        <td>2004-10-02</td>
                        <td>BotLoader</td>
                        <td>Pending</td>
                        <td><button className="gameButton">Review</button></td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
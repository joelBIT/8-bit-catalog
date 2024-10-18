import { ReactElement } from "react";

export function RequestsTableHead({ isAdmin }: { isAdmin: boolean }): ReactElement {
    return (
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Submitted</th>
                { isAdmin ? <th scope="col">Submitted by</th> : <></> }
                <th scope="col">Status</th>
            </tr>
        </thead>
    );
}
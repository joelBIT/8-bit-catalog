import { ReactElement } from "react";
import { FieldSetFrame, RequestForm } from "../components";

export function RequestPage(): ReactElement {
    return (
        <main id="requestPage">
            <FieldSetFrame legend={"Create Request"} body={<RequestForm />} />
        </main>
    );
}
import { ReactElement } from "react";
import { Input } from "../..";

export function PublisherInput(): ReactElement {
    return (
        <Input id="publisher" type="text" placeholder="Publisher" />
    );
}
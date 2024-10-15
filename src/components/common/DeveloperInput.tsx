import { ReactElement } from "react";
import { Input } from "..";

export function DeveloperInput(): ReactElement {
    return (
        <Input id="developer" type="text" placeholder="Developer" />
    );
}
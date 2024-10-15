import { ReactElement } from "react";
import { Input } from "..";

export function UsernameInput(): ReactElement {
    return (
        <Input id="username" type="text" placeholder="Username" />
    );
}
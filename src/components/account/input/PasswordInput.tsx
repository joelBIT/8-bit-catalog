import { ReactElement } from "react";
import { Input } from "../..";

export function PasswordInput(): ReactElement {
    return (
        <Input id="password" type="password" placeholder="Password" />
    );
}
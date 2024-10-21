import { ReactElement } from "react";
import { Input } from "../..";

export function PasswordRepeatInput(): ReactElement {
    return (
        <Input id="passwordRepeat" type="password" placeholder="Re-type Password" />
    );
}
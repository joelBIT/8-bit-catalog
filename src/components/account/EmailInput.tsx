import { ReactElement } from "react";
import { Input } from "..";

export function EmailInput({ placeholder }: { placeholder: string }): ReactElement {
    return (
        <Input id="email" type="email" placeholder={placeholder} />
    );
}
import { ReactElement } from "react";
import { Input } from "../..";

export function TitleInput(): ReactElement {
    return (
        <Input id="gameTitle" type="text" placeholder="Game title" />
    );
}
import { ReactElement } from "react";
import { ASSETS_URL } from "../../utils";

export function Logo(): ReactElement {
    return (
        <figure id="logo">
            <img src={`${ASSETS_URL}/Logo.jpeg`} />
        </figure>
    );
}
import { ReactElement } from "react";
import { AccountForm } from "./AccountForm";
import { AddGameForm } from "./AddGameForm";
import { Tab } from "./Tab";
import { getActiveUser } from "../../data";

export function AccountTabs(): ReactElement {

    return (
        <section id="accountTabs">
            <Tab id={"account"} label={"Account"} body={<AccountForm  />} checked={true} />
            { getActiveUser().isAdmin ? <Tab id={"addGame"} label={"Add game"} body={<AddGameForm />} checked={false} /> : <></> }
        </section>
    );
}
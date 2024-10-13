import { ReactElement } from "react";
import { AccountForm } from "./AccountForm";
import { AddGameForm } from "./AddGameForm";
import { Tab } from "./Tab";
import { User } from "../../interfaces";

export function AccountTabs({ user }: { user: User }): ReactElement {

    return (
        <section id="accountTabs">
            <Tab id={"account"} label={"Account"} body={<AccountForm user={user} />} checked={true} />
            { user.isAdmin ? <Tab id={"addGame"} label={"Add game"} body={<AddGameForm />} checked={false} /> : <></> }
        </section>
    );
}
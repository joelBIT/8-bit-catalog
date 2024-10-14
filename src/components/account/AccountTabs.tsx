import { ReactElement } from "react";
import { AccountForm } from "./AccountForm";
import { AddGameTab } from "./AddGameTab";
import { Tab } from "./Tab";
import { User } from "../../interfaces";

export function AccountTabs({ user }: { user: User }): ReactElement {

    return (
        <section id="accountTabs">
            <Tab id="account" label="Account" body={<AccountForm user={user} />} checked={true} />
            { user.isAdmin ? <Tab id="addGame" label="Add game" body={<AddGameTab />} checked={false} /> : <></> }
        </section>
    );
}
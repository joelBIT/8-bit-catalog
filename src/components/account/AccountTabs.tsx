import { ReactElement } from "react";
import { EditAccountTab } from "./EditAccountTab";
import { AddGameTab } from "./AddGameTab";
import { Tab } from "./Tab";
import { User } from "../../interfaces";

export function AccountTabs({ user }: { user: User }): ReactElement {

    return (
        <section id="accountTabs">
            <Tab id="account" label="Account" body={<EditAccountTab user={user} />} checked={true} />
            { user.isAdmin ? <Tab id="addGame" label="Add game" body={<AddGameTab />} checked={false} /> : <></> }
        </section>
    );
}
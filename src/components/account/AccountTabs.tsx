import { ReactElement } from "react";
import { Tab } from "./Tab";
import { User } from "../../interfaces";
import { AddGameTab, EditAccountTab, RequestsTab } from "..";

/**
 * The tabs that a user can see in his account page.
 * 
 * @param user          the logged in user
 * @returns             the tabs that the logged in user is authorized to see
 */
export function AccountTabs({ user }: { user: User }): ReactElement {

    return (
        <section id="accountTabs">
            <Tab id="account" label="Account" body={<EditAccountTab user={user} />} checked={true} />
            { user.isAdmin ? <Tab id="addGame" label="Add game" body={<AddGameTab />} checked={false} /> : <></> }
            <Tab id="requests" label="Requests" body={<RequestsTab />} checked={false} />
        </section>
    );
}
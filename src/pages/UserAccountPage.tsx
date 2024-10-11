import { ReactElement } from "react";
import { AccountTabs } from "../components/account/AccountTabs";
import { getActiveUser } from "../data";

export function UserAccountPage(): ReactElement {

    return (
        <main id="accountPage">
            <h1>Logged in as {getActiveUser().username}</h1>
            <AccountTabs />
        </main>
    );
}
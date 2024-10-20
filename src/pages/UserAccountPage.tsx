import { ReactElement } from "react";
import { User } from "../interfaces";
import { useLoaderData } from "react-router-dom";
import { AccountTabs } from "../components";

export function UserAccountPage(): ReactElement {
    const user = useLoaderData() as User;

    return (
        <main id="accountPage">
            <h1>Logged in as {user.username}</h1>
            <AccountTabs user={user} />
        </main>
    );
}
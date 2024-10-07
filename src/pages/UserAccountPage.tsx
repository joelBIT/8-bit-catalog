import { ReactElement, useContext } from "react";
import { AccountForm } from "../components/AccountForm";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";

export function UserAccountPage(): ReactElement {
    const { user } = useContext(AuthContext);

    return (
        <main id="accountPage">
            <h1>Logged in as {user.username}</h1>
            <AccountForm />
        </main>
    );
}
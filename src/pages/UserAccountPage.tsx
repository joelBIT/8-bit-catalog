import { ReactElement, useContext } from "react";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";

export function UserAccountPage(): ReactElement {
    const { user } = useContext(AuthContext);

    return (
        <main id="accountPage">
            <h1>{user.username} Account Page</h1>
        </main>
    );
}
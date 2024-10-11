import { ReactElement, useEffect } from "react";
import { AccountTabs } from "../components/account/AccountTabs";
import { useNavigate, useParams } from "react-router-dom";
import { getActiveUser } from "../data";

export function UserAccountPage(): ReactElement {
    const navigate = useNavigate();
    let { id } = useParams<string>();

    /**
     * Navigate to Forbidden Page if the current user ID is different than the ID supplied in params.
     */
    useEffect(() => {
        if (id && getActiveUser().id !== parseInt(id)) {
            navigate("/403");
        }
    });

    return (
        <main id="accountPage">
            <h1>Logged in as {getActiveUser().username}</h1>
            <AccountTabs />
        </main>
    );
}
import { ReactElement, useContext, useEffect } from "react";
import { AccountTabs } from "../components/AccountTabs";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";
import { useNavigate, useParams } from "react-router-dom";

export function UserAccountPage(): ReactElement {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    let { id } = useParams<string>();

    useEffect(() => {
        if (id && user.id !== parseInt(id)) {
            navigate("/403");
        }
    });

    return (
        <main id="accountPage">
            <h1>Logged in as {user.username}</h1>
            <AccountTabs />
        </main>
    );
}
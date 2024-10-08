import { ReactElement, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";
import { createAnonymousUser } from "../data";

export function LogoutPage(): ReactElement {
    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        setUser(createAnonymousUser());
    }, []);

    return (
        <main id="logoutPage">
            <h1>You have been successfully logged out</h1>
        </main>
    );
}
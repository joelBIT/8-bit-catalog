import { ReactElement, useContext, useEffect } from "react";
import { AuthContext } from "../contexts";
import { getActiveUser } from "../data";

export function Forbidden(): ReactElement {
    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        setUser(getActiveUser());
    }, []);
    
    return (
        <main id="forbiddenPage">
            <h1>You are not allowed to access the page</h1>
        </main>
    );
}
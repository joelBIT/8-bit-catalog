import { ReactElement, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";
import { getActiveUser } from "../data";
import { useRouteError } from "react-router-dom";

export function ErrorPage(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const error = useRouteError();
    console.log(error);

    useEffect(() => {
        setUser(getActiveUser());
    }, []);
    
    return (
        <main id="errorPage">
            <h1>An error occurred while loading the page</h1>
        </main>
    );
}
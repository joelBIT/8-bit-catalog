import { ReactElement, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";

export function LogoutPage(): ReactElement {
    const { setIsAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        logout();
    }, []);

    function logout() {
        localStorage.removeItem('activeUser');
        setIsAuthenticated(false);
      }

    return (
        <main id="logoutPage">
            <h1>You have been successfully logged out</h1>
        </main>
    );
}
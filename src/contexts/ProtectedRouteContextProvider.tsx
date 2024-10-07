import { createContext, ReactElement, useState } from "react";
import { AuthContextProvider, ContextProviderChildren } from "../interfaces";

export const AuthContext = createContext<AuthContextProvider>({} as AuthContextProvider);

export function ProtectedRouteContextProvider({children}: ContextProviderChildren): ReactElement {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}
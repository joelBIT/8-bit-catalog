import { createContext, ReactElement, useState } from "react";
import { AuthContextProvider, ContextProviderChildren, User } from "../interfaces";
import { createAnonymousUser } from "../utils";

export const AuthContext = createContext<AuthContextProvider>({} as AuthContextProvider);

export function ProtectedRouteContextProvider({children}: ContextProviderChildren): ReactElement {
    const [user, setUser] = useState<User>(createAnonymousUser());

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
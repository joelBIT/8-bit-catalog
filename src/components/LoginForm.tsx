import { ReactElement, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";
import { User } from "../interfaces";

export function LoginForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const passwordRef = useRef<HTMLInputElement>({} as HTMLInputElement);

    function login() {
        try {
            const user = getUserIfExists(usernameRef.current?.value);
            comparePasswords(user, passwordRef.current?.value);
            authenticated(user);
        } catch (error: any) {
            console.log(error);
        }
    }

    function getUserIfExists(username: string) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((user: { username: string; }) => user.username === username);
    
        if (!user) {
            throw new Error(`User ${username} does not exist`);
        }
    
        return user;
    }

    function comparePasswords(user: User, password: string) {
        if(user.password !== password) {
            throw new Error('Incorrect password');
        }
    }

    function authenticated(user: User) {
        user.isAuthenticated = true;
        setUser(user);
        navigate(`/account/${user.id}`);
    }

    return (
        <section id="loginCard">
            <h1>Log in</h1>
            <form id="loginForm">
                <input id="loginUsername" type="text" placeholder="Username" required ref={usernameRef} />
                <input id="loginPassword" type="password" placeholder="Password" autoComplete="false" required ref={passwordRef} />
                <button onClick={() => login()}>Login</button>
            </form>
            <Link to="/register">Create an Account</Link>
        </section>
    );
}
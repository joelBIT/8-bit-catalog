import { FormEvent, ReactElement, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";
import { User } from "../interfaces";
import { getUserIfExists } from "../data";

export function LoginForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function login(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const user = getUserIfExists(form.username.value);
            comparePasswords(user, form.password.value);
            authenticated(user);
        } catch (error: any) {
            console.log(error);
        }
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
            <form id="loginForm" onSubmit={event => login(event)}>
                <input id="username" type="text" placeholder="Username" autoComplete="false" required />
                <input id="password" type="password" placeholder="Password" autoComplete="false" required />
                <button type="submit">Login</button>
            </form>
            <Link to="/register">Create an Account</Link>
        </section>
    );
}
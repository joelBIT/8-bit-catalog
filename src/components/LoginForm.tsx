import { FormEvent, ReactElement, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";
import { User } from "../interfaces";
import { getUser, setActiveUser } from "../data";

export function LoginForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function login(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const user = getUser(form.username.value);
            
            if(user.password !== form.password.value) {
                throw new Error('Incorrect password');
            }

            authenticate(user);
        } catch (error: any) {
            console.log(error);
        }
    }
    
    function authenticate(user: User) {
        user.isAuthenticated = true;
        setActiveUser(user);
        setUser(user);
        navigate(`/account/${user.id}`);
    }

    return (
        <section id="loginCard">
            <h1>Log in</h1>
            <form id="loginForm" onSubmit={login}>
                <input id="username" type="text" placeholder="Username" autoComplete="false" required />
                <input id="password" type="password" placeholder="Password" autoComplete="false" required />
                <button className="accountButton" type="submit">Login</button>
            </form>
            <Link to="/register">Create an Account</Link>
        </section>
    );
}
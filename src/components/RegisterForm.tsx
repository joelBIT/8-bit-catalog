import { FormEvent, ReactElement, useContext } from "react";
import { User } from "../interfaces";
import { createNewUser } from "../utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";

export function RegisterForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function register(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const username = form.username.value;
            const password = form.password.value;
            const passwordRepeat = form.passwordRepeat.value;
      
            const users = JSON.parse(localStorage.getItem('users') || '[]');
      
            if (users.find((user: { username: string; }) => user.username === username)) {
                throw new Error(`User ${username} already exists!`);
            }
      
            if (password !== passwordRepeat) {
                throw new Error('Passwords do not match!');
            }
      
            registerUser(users, form);
        } catch (error: any) {
            console.log(error);
        }
    }

    function registerUser(users: User[], form: HTMLFormElement) {
        const user = createNewUser(users.length, form.username.value, form.password.value, form.email.value, 'User');
      
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        authenticated(user);
    }

    function authenticated(user: User) {
        user.isAuthenticated = true;
        setUser(user);
        navigate(`/account/${user.id}`);
    }

    return (
        <section id="registerCard">
            <h1>Create Account</h1>
            <form id="registerForm" onSubmit={event => register(event)}>
                <input id="username" type="text" placeholder="Username" autoComplete="false" required />
                <input id="email" type="email" placeholder="Email" autoComplete="false" required />
                <input id="password" type="password" placeholder="Password" autoComplete="false" required />
                <input id="passwordRepeat" type="password" placeholder="Re-type Password" autoComplete="false" required />
                <button type="submit">Register</button>
            </form>
        </section>
    );
}
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function LoginForm(): ReactElement {
    return (
        <section id="loginCard">
            <h1>Log in</h1>
            <form id="loginForm">
                <input id="loginUsername" type="text" placeholder="Username" required />
                <input id="loginPassword" type="password" placeholder="Password" autoComplete="false" required />
                <button onClick={() => console.log('log in')}>Login</button>
            </form>
            <Link to="/register">Create an Account</Link>
        </section>
    );
}
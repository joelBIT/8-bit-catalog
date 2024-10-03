import { ReactElement } from "react";

export function RegisterForm(): ReactElement {
    return (
        <section id="registerCard">
            <h1>Register</h1>
            <form id="registerForm">
                <input id="registerUsername" type="text" placeholder="Username" required />
                <input id="registerEmail" type="email" placeholder="Email" required />
                <input id="registerPassword" type="password" placeholder="Password" autoComplete="false" required />
                <input id="registerRetype" type="password" placeholder="Retype Password" autoComplete="false" required />
                <button onClick={() => console.log('create account')}>Register</button>
            </form>
        </section>
    );
}
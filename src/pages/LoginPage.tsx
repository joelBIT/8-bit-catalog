import { ReactElement } from "react";
import { LoginForm } from "../components";

export function LoginPage(): ReactElement {
    return (
        <main id="loginPage">
            <LoginForm />
        </main>
    );
}
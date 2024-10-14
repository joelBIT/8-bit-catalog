import { FormEvent, ReactElement, useContext } from "react";
import { authenticate, createNewUser } from "../../data";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";
import { URL_ACCOUNT_PAGE } from "../../utils";
import { Input } from "..";

export function RegisterForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function register(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const user = createNewUser(form.username.value, form.password.value, form.passwordRepeat.value, form.email.value);
            authenticate(user);
            setUser(user);
            navigate(`${URL_ACCOUNT_PAGE}/${user.id}`);
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <section id="registerCard">
            <h1>Create Account</h1>
            <form id="registerForm" onSubmit={register}>
                <Input id="username" type="text" placeholder="Username" />
                <Input id="email" type="email" placeholder="Email" />
                <Input id="password" type="password" placeholder="Password" />
                <Input id="passwordRepeat" type="password" placeholder="Re-type Password" />

                <button className="accountButton" type="submit">Register</button>
            </form>
        </section>
    );
}
import { FormEvent, ReactElement, useContext, useState } from "react";
import { authenticate, createNewUser } from "../../data";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { URL_ACCOUNT_PAGE } from "../../utils";
import { Input, PasswordInput, UsernameInput } from "..";

export function RegisterForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const [ errorMessage, setErrorMessage ] = useState<string>("");
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
            setErrorMessage(error.message);
            setTimeout(() => setErrorMessage(""), 5000);
        }
    }

    return (
        <section id="registerCard">
            <h1>Create Account</h1>
            { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }

            <form id="registerForm" onSubmit={register}>
                <UsernameInput />
                <Input id="email" type="email" placeholder="Email" />
                <PasswordInput />
                <Input id="passwordRepeat" type="password" placeholder="Re-type Password" />

                <button className="accountButton" type="submit">Register</button>
            </form>
        </section>
    );
}
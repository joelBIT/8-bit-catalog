import { FormEvent, ReactElement, useContext, useState } from "react";
import { authenticate, createNewUser } from "../../data/user";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { URL_ACCOUNT_PAGE } from "../../utils";
import { EmailInput, PasswordInput, PasswordRepeatInput, UsernameInput } from "..";

export function RegisterForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const [ errorMessage, setErrorMessage ] = useState<string>("");
    const navigate = useNavigate();

    /**
     * Creates a new user. The submitted username and password are validated before the user is created.
     * When successfully registered, the user is automatically logged in and redirected to his account page.
     */
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
                <EmailInput placeholder="Email" />
                <PasswordInput />
                <PasswordRepeatInput />

                <button className="accountButton" type="submit">Register</button>
            </form>
        </section>
    );
}
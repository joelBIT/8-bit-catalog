import { FormEvent, ReactElement, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, authenticate, validatePassword } from "../../data/user";
import { PasswordInput, UsernameInput } from "..";
import { URL_ACCOUNT_PAGE, URL_REGISTER_PAGE } from "../../utils";
import { AuthContext } from "../../contexts";

export function LoginForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const [ errorMessage, setErrorMessage ] = useState<string>("");
    const navigate = useNavigate();

    /**
     * A user is logged in if the user exists and the password validation is successful.
     * The user is redirected to his account page.
     */
    function login(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const user = getUser(form.username.value);
            validatePassword(user.password, form.password.value);

            authenticate(user);
            setUser(user);
            navigate(`${URL_ACCOUNT_PAGE}/${user.id}`);
        } catch (error: any) {
            setErrorMessage(error.message);
            setTimeout(() => setErrorMessage(""), 5000);
        }
    }

    return (
        <section id="loginCard">
            <h1>Log in</h1>
            { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }
            
            <form id="loginForm" onSubmit={login}>
                <UsernameInput />
                <PasswordInput />
                
                <button className="accountButton" type="submit">Login</button>
            </form>
            <Link to={URL_REGISTER_PAGE}>Create an Account</Link>
        </section>
    );
}
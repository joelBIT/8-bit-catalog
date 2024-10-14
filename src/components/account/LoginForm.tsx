import { FormEvent, ReactElement, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";
import { getUser, authenticate, validatePassword } from "../../data";
import { Input } from "..";
import { URL_ACCOUNT_PAGE, URL_REGISTER_PAGE } from "../../utils";

export function LoginForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

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
            console.log(error);
        }
    }

    return (
        <section id="loginCard">
            <h1>Log in</h1>
            <form id="loginForm" onSubmit={login}>
                <Input id="username" type="text" placeholder="Username" />
                <Input id="password" type="password" placeholder="Password" />
                
                <button className="accountButton" type="submit">Login</button>
            </form>
            <Link to={URL_REGISTER_PAGE}>Create an Account</Link>
        </section>
    );
}
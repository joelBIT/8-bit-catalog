import { FormEvent, ReactElement, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";
import { User } from "../../interfaces";
import { getUser, setActiveUser } from "../../data";
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
            
            if(user.password !== form.password.value) {
                throw new Error('Incorrect password');
            }

            authenticate(user);
        } catch (error: any) {
            console.log(error);
        }
    }
    
    function authenticate(user: User): void {
        user.isAuthenticated = true;
        setActiveUser(user);
        setUser(user);
        navigate(`${URL_ACCOUNT_PAGE}/${user.id}`);
    }

    return (
        <section id="loginCard">
            <h1>Log in</h1>
            <form id="loginForm" onSubmit={login}>
                <Input id={"username"} type={"text"} placeholder={"Username"} />
                <Input id={"password"} type={"password"} placeholder={"Password"} />
                
                <button className="accountButton" type="submit">Login</button>
            </form>
            <Link to={URL_REGISTER_PAGE}>Create an Account</Link>
        </section>
    );
}
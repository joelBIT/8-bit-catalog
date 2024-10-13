import { FormEvent, ReactElement, useContext } from "react";
import { createNewUser, setActiveUser, userExists } from "../../data";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";
import { generateUserId, URL_ACCOUNT_PAGE } from "../../utils";
import { Input } from "..";

export function RegisterForm(): ReactElement {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function register(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const username = form.username.value;
            const password = form.password.value;
            const passwordRepeat = form.passwordRepeat.value;
      
            if (userExists(username)) {
                throw new Error(`User ${username} already exists!`);
            }
      
            if (password !== passwordRepeat) {
                throw new Error('Passwords do not match!');
            }
      
            registerUser(generateUserId(), username, password, form.email.value);
        } catch (error: any) {
            console.log(error);
        }
    }

    function registerUser(id: number, username: string, password: string, email: string): void {
        const user = createNewUser(id, username, password, email, false);
      
        setActiveUser(user);
        setUser(user);
        navigate(`${URL_ACCOUNT_PAGE}/${user.id}`);
    }

    return (
        <section id="registerCard">
            <h1>Create Account</h1>
            <form id="registerForm" onSubmit={register}>
                <Input id={"username"} type={"text"} placeholder={"Username"} />
                <Input id={"email"} type={"email"} placeholder={"Email"} />
                <Input id={"password"} type={"password"} placeholder={"Password"} />
                <Input id={"passwordRepeat"} type={"password"} placeholder={"Re-type Password"} />

                <button className="accountButton" type="submit">Register</button>
            </form>
        </section>
    );
}
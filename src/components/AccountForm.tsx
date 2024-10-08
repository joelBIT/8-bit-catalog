import { FormEvent, ReactElement, useContext, useState } from "react";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";

export function AccountForm(): ReactElement {
    const { user, setUser } = useContext(AuthContext);
    const [ message, setMessage ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    function saveChanges(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const email = form.email.value;
            const password = form.password.value;
            const passwordRepeat = form.passwordRepeat.value;
            
            if (password !== passwordRepeat) {
                throw new Error('Passwords do not match!');
            }

            user.email = email;
            user.password = password;
            setUser(user);
            resetForm(form);
            setMessage("Account successfully updated");
            setTimeout(() => setMessage(""), 5000);
        } catch (error: any) {
            setErrorMessage(error.message);
            resetForm(form);
            setTimeout(() => setErrorMessage(""), 5000);
        }
    }

    function resetForm(form: HTMLFormElement) {
        form.email.value = "";
        form.email.placeholder = user.email;
        form.password.value = "";
        form.passwordRepeat.value = "";
    }

    return (
        <section id="accountInformation">
            <form id="accountForm" onSubmit={event => saveChanges(event)}>
                <h1>Update account information</h1>
                <input id="email" type="email" placeholder={user.email} autoComplete="false" required />
                <input id="password" type="password" placeholder="Password" autoComplete="false" required />
                <input id="passwordRepeat" type="password" placeholder="Re-type Password" autoComplete="false" required />
                <button type="submit">Save</button>
            </form>

            { message ? <h1 id="message">{message}</h1> : <></> }
            { errorMessage ? <h1 id="errorMessage">{errorMessage}</h1> : <></> }
        </section>
    );
}
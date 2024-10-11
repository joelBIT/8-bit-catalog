import { FormEvent, ReactElement, useContext, useState } from "react";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";

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
            setMessage("Account successfully updated");
            setTimeout(() => setMessage(""), 5000);
        } catch (error: any) {
            setErrorMessage(error.message);
            setTimeout(() => setErrorMessage(""), 5000);
        }

        form.reset();
    }

    return (
        <section id="accountInformation">
            <form id="accountForm" onSubmit={event => saveChanges(event)}>
                <h1 id="updateAccountHeading">Update account information</h1>
                <input id="email" type="email" placeholder={user.email} autoComplete="false" required />
                <input id="password" type="password" placeholder="Password" autoComplete="false" required />
                <input id="passwordRepeat" type="password" placeholder="Re-type Password" autoComplete="false" required />

                { message ? <h4 className="successMessage">{message}</h4> : <></> }
                { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }
                <button className="accountButton" type="submit">Save</button>
            </form>
        </section>
    );
}
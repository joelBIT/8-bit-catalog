import { FormEvent, ReactElement, useContext } from "react";
import { AuthContext } from "../contexts/ProtectedRouteContextProvider";

export function AccountForm(): ReactElement {
    const { user, setUser } = useContext(AuthContext);

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
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <section id="accountForm">
            <input type="radio" id="account" name="tabs" defaultChecked />
            <label htmlFor="account">Account</label>

            <div className="tab">
                <h1>Update account information</h1>
                <form id="accountInformation" onSubmit={event => saveChanges(event)}>
                    <input id="email" type="email" placeholder={user.email} autoComplete="false" required />
                    <input id="password" type="password" placeholder="Password" autoComplete="false" required />
                    <input id="passwordRepeat" type="password" placeholder="Re-type Password" autoComplete="false" required />
                    <button type="submit">Save</button>
                </form>
            </div>

            <input type="radio" id="addGame" name="tabs" />
            <label htmlFor="addGame">Add game</label>
            <div className="tab">
                <section id="addGameForm">
                    
                    
                </section>
            </div>
        </section>
    );
}
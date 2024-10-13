import { FormEvent, ReactElement, useState } from "react";
import { setActiveUser, updateUser } from "../../data";
import { User } from "../../interfaces";
import { Input } from "..";

export function AccountForm({ user }: { user: User }): ReactElement {
    const [ message, setMessage ] = useState<string>("");
    const [ errorMessage, setErrorMessage ] = useState<string>("");

    function saveChanges(event: FormEvent<HTMLFormElement>): void {
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
            setActiveUser(user);
            updateUser(user);
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
                <Input id={"email"} type={"email"} placeholder={user.email} />
                <Input id={"password"} type={"password"} placeholder={"Password"} />
                <Input id={"passwordRepeat"} type={"password"} placeholder={"Re-type Password"} />

                { message ? <h4 className="successMessage">{message}</h4> : <></> }
                { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }
                
                <button className="accountButton" type="submit">Save</button>
            </form>
        </section>
    );
}
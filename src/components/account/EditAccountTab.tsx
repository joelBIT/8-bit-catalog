import { FormEvent, ReactElement, useState } from "react";
import { comparePasswords, setActiveUser, updateUser } from "../../data";
import { User } from "../../interfaces";
import { EmailInput, PasswordInput, PasswordRepeatInput } from "..";

export function EditAccountTab({ user }: { user: User }): ReactElement {
    const [ message, setMessage ] = useState<string>("");
    const [ errorMessage, setErrorMessage ] = useState<string>("");

    function saveChanges(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        try {
            const password = form.password.value;
            comparePasswords(password, form.passwordRepeat.value);

            user.email = form.email.value;
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
        <section id="editAccountTab">
            <form id="accountForm" onSubmit={event => saveChanges(event)}>
                <h1 id="updateAccountHeading">Update account information</h1>
                <EmailInput placeholder={user.email} />
                <PasswordInput />
                <PasswordRepeatInput />

                { message ? <h4 className="successMessage">{message}</h4> : <></> }
                { errorMessage ? <h4 className="errorMessage">{errorMessage}</h4> : <></> }
                
                <button className="accountButton" type="submit">Save</button>
            </form>
        </section>
    );
}
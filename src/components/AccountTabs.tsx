import { ReactElement } from "react";
import { AccountForm } from "./AccountForm";

export function AccountTabs(): ReactElement {

    return (
        <section id="accountTabs">
            <input type="radio" id="account" name="tabs" defaultChecked />
            <label htmlFor="account">Account</label>

            <div className="tab">
                <AccountForm />
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
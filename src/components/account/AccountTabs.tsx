import { ReactElement, useContext } from "react";
import { AccountForm } from "./AccountForm";
import { AddGameForm } from "./AddGameForm";
import { AuthContext } from "../../contexts/ProtectedRouteContextProvider";
import { Tab } from "./Tab";

export function AccountTabs(): ReactElement {
    const { user } = useContext(AuthContext);

    return (
        <section id="accountTabs">
            <Tab id={"account"} label={"Account"} body={<AccountForm  />} checked={true} />
            
            { user.isAdmin ? <Tab id={"addGame"} label={"Add game"} body={<AddGameForm />} checked={false} /> : <></> }
        </section>
    );
}
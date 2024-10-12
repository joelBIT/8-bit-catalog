import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getActiveUser } from "../data";

/**
 * Checks if the user trying to navigate to the account page has the same ID as the logged in user.
 * If these are identical, the user is allowed to access the account page. Otherwise, the user is
 * redirected to the Forbidden page.
 * 
 * @param param0        the ID of a user
 * @returns             a redirect if invalid user ID, otherwise access to account page
 */
export function UserAccountLoader({params}: LoaderFunctionArgs<string>): any {
    if (getActiveUser().id !== Number(params.id) || Number(params.id) < 0) {
        return redirect("/403");
    }
    
    return null;
}
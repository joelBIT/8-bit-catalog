import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getActiveUser } from "../data/user";
import { User } from "../interfaces";
import { URL_FORBIDDEN_PAGE } from "../utils";

/**
 * Checks if the user trying to navigate to the account page has the same ID as the logged in user.
 * If these are identical, the user is allowed to access the account page. Otherwise, the user is
 * redirected to the Forbidden page.
 * 
 * @param param0        the ID of a user
 * @returns             a user object having the supplied ID
 */
export function UserAccountLoader({ params }: LoaderFunctionArgs<string>): User | Response {
    if (getActiveUser().id !== Number(params.id) || Number(params.id) < 0) {
        return redirect(URL_FORBIDDEN_PAGE);
    }
    
    return getActiveUser();
}
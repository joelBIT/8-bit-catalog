import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { GameRequest } from "../interfaces";
import { getRequest } from "../data/request";
import { getActiveUser } from "../data/user";
import { URL_FORBIDDEN_PAGE, URL_NOT_FOUND_PAGE } from "../utils";

/**
 * Retrieves the Request to be reviewed. Only admins are allowed to review a request so if the user
 * trying to access the Request is not an admin the user is redirected to the Forbidden Page. 
 * 
 * @param param0    the ID of the Request
 * @returns         the Request if a match is found for the supplied ID
 */
export function RequestReviewLoader({ params }: LoaderFunctionArgs<string>): GameRequest | Response {

    if (!getActiveUser().isAdmin) {
        return redirect(URL_FORBIDDEN_PAGE);
    }

    if (params.id) {
        return getRequest(parseInt(params.id));
    }
    
    return redirect(URL_NOT_FOUND_PAGE);
}
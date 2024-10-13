import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getActiveUser, getGame } from "../data";
import { Game } from "../interfaces";
import { URL_FORBIDDEN_PAGE, URL_NOT_FOUND_PAGE } from "../utils";

/**
 * A user is redirected if not an admin due to regular users not being allowed to edit games.
 * If no game is found with the supplied ID a redirection to NotFound occurs.
 * 
 * @param param0    the ID of a game
 * @returns         a Game object if one exists with the supplied ID
 */
export function EditGameLoader({ params }: LoaderFunctionArgs<string>): Game | Response {
    
    if (!getActiveUser().isAdmin) {
        return redirect(URL_FORBIDDEN_PAGE);
    }

    if (params.id) {
        return getGame(parseInt(params.id));
    }
    
    return redirect(URL_NOT_FOUND_PAGE);
}
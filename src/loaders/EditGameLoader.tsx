import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getActiveUser, getGame } from "../data";

/**
 * A user is redirected if not an admin due to regular users not being allowed to edit games.
 * If no game is found with the supplied ID a redirection to NotFound occurs.
 * 
 * @param param0    the ID of a game
 * @returns         a Game object if one exists with the supplied ID
 */
export function EditGameLoader({params}: LoaderFunctionArgs<string>): any {
    
    if (!getActiveUser().isAdmin) {
        return redirect("/403");
    }

    if (params.id) {
        try {
            return getGame(parseInt(params.id));
        } catch (error) {
            console.log(error);
        }
    }
    
    return redirect("*");
}
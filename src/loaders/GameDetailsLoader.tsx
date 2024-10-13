import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getGame } from "../data";
import { Game } from "../interfaces";

/**
 * If no game is found with the supplied ID a redirect to NotFound occurs.
 * 
 * @param param0    the ID of a game
 * @returns         a Game object if one exists with the supplied ID
 */
export function GameDetailsLoader({ params }: LoaderFunctionArgs<string>): Game | Response {

    if (params.id) {
        return getGame(parseInt(params.id));
    }
    
    return redirect("*");
}
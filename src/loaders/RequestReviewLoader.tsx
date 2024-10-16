import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { GameRequest } from "../interfaces";
import { getRequest } from "../data/request";
import { getActiveUser } from "../data/user";
import { URL_FORBIDDEN_PAGE, URL_NOT_FOUND_PAGE } from "../utils";

export function RequestReviewLoader({ params }: LoaderFunctionArgs<string>): GameRequest | Response {

    if (!getActiveUser().isAdmin) {
        return redirect(URL_FORBIDDEN_PAGE);
    }

    if (params.id) {
        return getRequest(parseInt(params.id));
    }
    
    return redirect(URL_NOT_FOUND_PAGE);
}
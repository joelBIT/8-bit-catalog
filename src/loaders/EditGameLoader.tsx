import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getActiveUser } from "../data";

export function EditGameLoader({params}: LoaderFunctionArgs<string>): any {
    if (!getActiveUser().isAdmin) {
        return redirect("/403");
    }
    
    return null;
}
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getActiveUser } from "../data";

export function UserAccountLoader({params}: LoaderFunctionArgs<string>): any {
    if (getActiveUser().id !== Number(params.id) || Number(params.id) < 0) {
        return redirect("/403");
    }
    
    return null;
}
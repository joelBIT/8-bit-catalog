import { ReactElement } from "react";
import { FieldSetFrame, ReviewCard } from "../components";
import { GameRequest } from "../interfaces";
import { useLoaderData } from "react-router-dom";

export function ReviewPage(): ReactElement {
    const request = useLoaderData() as GameRequest;

    return (
        <main id="reviewPage">
            <FieldSetFrame 
                legend="Review Request" 
                body={<ReviewCard request={request} />} 
            />
        </main>
    );
}
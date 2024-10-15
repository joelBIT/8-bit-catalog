import { ReactElement } from "react";
import { FieldSetFrame, GameForm } from "../components";
import { createRequest } from "../data/request";

export function RequestPage(): ReactElement {
    return (
        <main id="requestPage">
            <FieldSetFrame 
                legend="Create Request" 
                body={<GameForm 
                            onSubmit={createRequest} 
                            buttonClass="gameButton"
                            errorText="Could not create request"
                            successText="Request successfully created" 
                        />} 
            />
        </main>
    );
}
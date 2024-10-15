import { ReactElement } from "react";
import { FieldSetFrame, GameForm } from "../components";

export function ReviewPage(): ReactElement {

    function processRequest() {

    }

    return (
        <main id="reviewPage">
            <FieldSetFrame 
                legend="Review Request" 
                body={<GameForm 
                            onSubmit={processRequest} 
                            buttonClass="gameButton"
                            errorText="Could not process request"
                            successText="Request processed successfully" 
                        />} 
            />
        </main>
    );
}
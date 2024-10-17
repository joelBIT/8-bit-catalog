import { FormEvent, ReactElement } from "react";
import { DescriptionInput } from "../common/DescriptionInput";

export function ReviewModal({ showModal, confirm }: { showModal: (arg0: boolean) => void, confirm: (reason: string) => void }): ReactElement {

    function denied(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        confirm(form.description.value);
    }

    return (
        <dialog id="reviewModal" open>
            <form id="reviewForm" method="dialog" onSubmit={denied}>
                <p>Are you sure you want to deny the request? Type in a reason below</p>
                <DescriptionInput form="reviewForm" />
                <div className="buttons">
                    <button onClick={() => showModal(false)} className="gameButton">Cancel</button>
                    <button type="submit" className="gameButton">Confirm</button>
                </div>
            </form>
        </dialog>
    );
}
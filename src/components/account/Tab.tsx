import { ReactElement } from "react";

export function Tab({ id, label, body, checked }: { id: string, label: string, body: ReactElement, checked: boolean }): ReactElement {
    return (
        <>
            {checked ? <input type="radio" id={id} name="tabs" defaultChecked /> : <input type="radio" id={id} name="tabs" /> }
            <label htmlFor={id}>{label}</label>
            <div className="tab">
                { body }
            </div>
        </>
    );
}
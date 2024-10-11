import { ChangeEvent, ReactElement } from "react";

export function DateInput({ id, label, setDate }: { id: string, label: string, setDate: (arg0: number) => void}): ReactElement {
    
    function handleDate(event: ChangeEvent<HTMLInputElement>) {
        setDate(parseInt(event.target.value.slice(0, 4)));
    }

    return (
        <section id="releasedSection">
            <h2>{label}</h2>
            <input id={id} type="date" onChange={handleDate} required />
        </section>
    );
}
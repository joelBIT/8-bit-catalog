import { ChangeEvent, ReactElement, useRef } from "react";

export function DateInput({ id, label, value, setDate }: { id: string, label: string, value: string, setDate: (arg0: string) => void}): ReactElement {
    const ref = useRef<HTMLInputElement>(null);
    
    function handleDate(event: ChangeEvent<HTMLInputElement>) {
        console.log(ref.current?.value);
        console.log(event.target.value);
        setDate(event.target.value);
        //setDate(parseInt(event.target.value.slice(0, 4)));
    }

    return (
        <section id="releasedSection">
            <h2>{label}</h2>
            <input id={id} type="date" ref={ref} value={value} onChange={handleDate} required />
        </section>
    );
}
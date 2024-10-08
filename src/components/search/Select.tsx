import { ReactElement, useRef } from "react";
import { DEFAULT_OPTION_VALUE } from "../../utils";

export function Select({title, list, defaultOption, getOption}: {title: string, list: string[], defaultOption: boolean, getOption: (option: string) => void}): ReactElement {
    const ref = useRef<HTMLSelectElement>(null);

    return (
        <section id={`${title.toLocaleLowerCase() + "Section"}`}>
            <h2>{title}</h2>
            <select id={`${title.toLocaleLowerCase()}`} ref={ref} onChange={() => getOption(ref.current ? ref.current.value : DEFAULT_OPTION_VALUE)}>
                { defaultOption ? <option value={DEFAULT_OPTION_VALUE}>{DEFAULT_OPTION_VALUE}</option> : <></> }
                {list.map((element, index) => <option key={index} value={element}>{element}</option>)}
            </select>
        </section>
    );
}
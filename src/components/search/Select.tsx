import { ReactElement, useRef } from "react";
import { ALL_OPTION_VALUE } from "../../utils";

export function Select({title, list, defaultOption, getOption}: {title: string, list: string[], defaultOption: string, getOption: (option: string) => void}): ReactElement {
    const ref = useRef<HTMLSelectElement>(null);

    return (
        <section id={`${title.toLocaleLowerCase() + "Section"}`}>
            <h2>{title}</h2>
            <select id={`${title.toLocaleLowerCase()}`} defaultValue={defaultOption} ref={ref} onChange={() => getOption(ref.current ? ref.current.value : ALL_OPTION_VALUE)}>
                {list.map((element, index) => <option key={index} value={element}>{element}</option>)}
            </select>
        </section>
    );
}
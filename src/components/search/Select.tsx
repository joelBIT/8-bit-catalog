import { ReactElement, useRef } from "react";
import { DEFAULT_OPTION_VALUE } from "../../utils";

export function Select({title, list, getOption}: {title: string, list: string[], getOption: Function}): ReactElement {
    const ref = useRef<HTMLSelectElement>(null);

    return (
        <section>
            <h2>{title}</h2>
            <select ref={ref} onChange={() => getOption(ref.current?.value)}>
                <option value={DEFAULT_OPTION_VALUE}>{DEFAULT_OPTION_VALUE}</option>
                {list.map((element, index) => <option key={index} value={element}>{element}</option>)}
            </select>
        </section>
    );
}
import { ReactElement } from "react";

export function Select({title, list}: {title: string, list: string[]}): ReactElement {
    return (
        <section>
            <h2>{title}</h2>
            <select>
                <option value="All">All</option>
                {list.map((element, index) => <option key={index} value={element}>{element}</option>)}
            </select>
        </section>
    );
}
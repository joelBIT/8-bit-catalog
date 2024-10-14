import { ReactElement } from "react";
import { Select } from "..";
import { createFilterList } from "../../utils";

export function DeveloperFilter({ defaultOption, setDeveloper }: { defaultOption: string, setDeveloper: (developer: string) => void }): ReactElement {
    return (
        <Select 
            title="Developer" 
            list={createFilterList("developer")} 
            defaultOption={defaultOption} 
            getOption={setDeveloper} 
        />
    );
}
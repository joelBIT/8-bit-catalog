import { ReactElement } from "react";
import { addAllOption, createFilterList } from "../../utils";
import { Select } from "..";

export function PublisherFilter({ defaultOption, setPublisher }: { defaultOption: string, setPublisher: (publisher: string) => void }): ReactElement {
    return (
        <Select 
            title="Publisher" 
            list={addAllOption(createFilterList("publisher"))} 
            defaultOption={defaultOption} 
            getOption={setPublisher} 
        />
    );
}
import { ReactElement } from "react";
import { createFilterList } from "../../utils";
import { Select } from "..";

export function PublisherFilter({ defaultOption, setPublisher }: { defaultOption: string, setPublisher: (publisher: string) => void }): ReactElement {
    return (
        <Select 
            title="Publisher" 
            list={createFilterList("publisher")} 
            defaultOption={defaultOption} 
            getOption={setPublisher} 
        />
    );
}
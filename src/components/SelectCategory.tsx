import { ReactElement } from "react";
import { Select } from ".";
import { createFilterList } from "../utils";

export function SelectCategory({ defaultOption, setCategory }: { defaultOption: string, setCategory: (category: string) => void }): ReactElement {
    return (
        <Select 
            title="Category" 
            list={createFilterList("category")} 
            defaultOption={defaultOption} 
            getOption={setCategory} 
        />
    );
}
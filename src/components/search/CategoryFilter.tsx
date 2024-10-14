import { ReactElement } from "react";
import { Select } from "..";
import { addAllOption, createFilterList } from "../../utils";

export function CategoryFilter({ defaultOption, setCategory }: { defaultOption: string, setCategory: (category: string) => void }): ReactElement {
    return (
        <Select 
            title="Category" 
            list={addAllOption(createFilterList("category"))} 
            defaultOption={defaultOption} 
            getOption={setCategory} 
        />
    );
}
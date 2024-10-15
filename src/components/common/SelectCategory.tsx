import { ReactElement } from "react";
import { Select } from "..";
import { createSelectList } from "../../utils";

export function SelectCategory({ defaultOption, setCategory }: { defaultOption: string, setCategory: (category: string) => void }): ReactElement {
    return (
        <Select 
            title="Category" 
            list={createSelectList("category")} 
            defaultOption={defaultOption} 
            getOption={setCategory} 
        />
    );
}
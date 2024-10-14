import { ReactElement } from "react";

export function EditDescription({ description, form, setDescription }: { description: string, form: string, setDescription: (description: string) => void}): ReactElement {
    return (
        <textarea 
            id="description" 
            form={form} 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Description" 
            autoComplete="false" 
            required 
        />
    );
}
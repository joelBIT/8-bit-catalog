import { ReactElement } from "react";

export function EditDeveloper({ developer, setDeveloper }: { developer: string, setDeveloper: (title: string) => void }): ReactElement {
    return (
        <input 
            id="developer" 
            type="text" 
            value={developer} 
            onChange={(e) => setDeveloper(e.target.value)} 
            placeholder="Developer" 
            autoComplete="false" 
            required 
        />
    );
}
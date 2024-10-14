import { ReactElement } from "react";

export function EditPublisher({ publisher, setPublisher }: { publisher: string, setPublisher: (publisher: string) => void}): ReactElement {
    return (
        <input 
            id="publisher" 
            type="text" 
            value={publisher} 
            onChange={(e) => setPublisher(e.target.value)} 
            placeholder="Publisher" 
            autoComplete="false" 
            required 
        />
    );
}
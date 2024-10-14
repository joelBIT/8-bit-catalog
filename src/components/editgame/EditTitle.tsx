import { ReactElement } from "react";

export function EditTitle({ title, setTitle }: { title: string, setTitle: (title: string) => void }): ReactElement {
    return (
        <input 
            id="gameTitle" 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Game title" 
            autoComplete="false" 
            required 
        />
    );
}
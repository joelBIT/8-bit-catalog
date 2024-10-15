import { ReactElement, KeyboardEvent, useRef } from "react";

export function SearchInput({ onSearch }: { onSearch: (title: string) => void }): ReactElement {
    const searchRef = useRef<HTMLInputElement>(null);

    /**
     * Performs a search based on given title text and filters. The search is executed either
     * when the button is pressed or when the Enter key is pressed in the input field.
     */
    function executeSearch(): void {
        if (searchRef.current) {
            onSearch(searchRef.current.value);
        }
    }
    
    function searchIfEnter(event: KeyboardEvent<HTMLInputElement>): void {
        if (event.key === 'Enter') {
            executeSearch();
        }
    }

    return (
        <article id="searchInput">
            <input 
                id="searchTitle" 
                type="text" 
                placeholder="Game Title" 
                ref={searchRef} 
                onKeyDown={searchIfEnter} 
            />
            
            <button className="gameButton" onClick={() => executeSearch()}>Search</button>
        </article>
    );
}
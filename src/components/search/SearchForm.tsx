import { KeyboardEvent, ReactElement, useRef, useState } from "react";
import { CategoryFilter, DeveloperFilter, PublisherFilter } from "..";
import { ALL_OPTION_VALUE } from "../../utils";

export function SearchForm( {search}: {search: Function} ): ReactElement {
    const searchRef = useRef<HTMLInputElement>(null);
    const [category, setCategory] = useState<string>(ALL_OPTION_VALUE);
    const [publisher, setPublisher] = useState<string>(ALL_OPTION_VALUE);
    const [developer, setDeveloper] = useState<string>(ALL_OPTION_VALUE);

    /**
     * Performs a search based on given title text and filters. The search is executed either
     * when the button is pressed or when the Enter key is pressed in the input field.
     */
    function executeSearch(): void {
        if (searchRef.current) {
            search(searchRef.current.value, category, publisher, developer);
        }
    }

    function searchIfEnter(event: KeyboardEvent<HTMLInputElement>): void {
        if (event.key === 'Enter') {
            executeSearch();
        }
    }

    return (
        <section id="searchForm">
            <h1>Search Games</h1>
            <article id="searchFilters">
                <CategoryFilter defaultOption={category} setCategory={setCategory} />
                <PublisherFilter defaultOption={publisher} setPublisher={setPublisher} />
                <DeveloperFilter defaultOption={developer} setDeveloper={setDeveloper} />
            </article>

            <article id="searchInput">
                <input 
                    id="searchTitle" 
                    type="text" 
                    placeholder="Game Title" 
                    ref={searchRef} 
                    onKeyDown={event => searchIfEnter(event)} 
                />
                
                <button className="gameButton" onClick={() => executeSearch()}>Search</button>
            </article>
        </section>
    );
}
import { KeyboardEvent, ReactElement, useRef, useState } from "react";
import { Select } from "..";
import { ALL_OPTION_VALUE, createFilterList } from "../../utils";

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

    /**
     * Adds the 'ALL' option to the list so that a search can be performed on all games.
     * 
     * @param list      list of options in filter list
     * @returns         list of options in filter list including the 'All' option
     */
    function addAllOption(list: string[]): string[] {
        list.unshift(ALL_OPTION_VALUE);
        return list;
    }

    return (
        <section id="searchForm">
            <h1>Search Games</h1>
            <article id="searchFilters">
                <Select 
                    title="Category" 
                    list={addAllOption(createFilterList("category"))} 
                    defaultOption={category} 
                    getOption={setCategory} 
                />
                
                <Select 
                    title="Publisher" 
                    list={addAllOption(createFilterList("publisher"))} 
                    defaultOption={publisher} 
                    getOption={setPublisher} 
                />
                
                <Select 
                    title="Developer" 
                    list={addAllOption(createFilterList("developer"))} 
                    defaultOption={developer} 
                    getOption={setDeveloper} 
                />
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
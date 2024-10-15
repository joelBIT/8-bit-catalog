import { ReactElement, useState } from "react";
import { CategoryFilter, DeveloperFilter, PublisherFilter, SearchInput } from "..";
import { ALL_OPTION_VALUE } from "../../utils";

export function SearchForm({ search }: { search: (title: string, category: string, publisher: string, developer: string) => void }): ReactElement {
    const [category, setCategory] = useState<string>(ALL_OPTION_VALUE);
    const [publisher, setPublisher] = useState<string>(ALL_OPTION_VALUE);
    const [developer, setDeveloper] = useState<string>(ALL_OPTION_VALUE);

    /**
     * Performs a search based on given title text and filters. The search is executed either
     * when the button is pressed or when the Enter key is pressed in the input field.
     */
    function onSearch(title: string) {
        search(title, category, publisher, developer);
    }

    return (
        <section id="searchForm">
            <h1>Search Games</h1>
            <article id="searchFilters">
                <CategoryFilter defaultOption={category} setCategory={setCategory} />
                <PublisherFilter defaultOption={publisher} setPublisher={setPublisher} />
                <DeveloperFilter defaultOption={developer} setDeveloper={setDeveloper} />
            </article>

            <SearchInput onSearch={onSearch} />
        </section>
    );
}
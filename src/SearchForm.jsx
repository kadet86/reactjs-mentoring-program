// @flow
import * as React from 'react';
import SearchBy from './SearchBy';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

type Props = {
    query?: string,
    searchBy: string,
    onQueryChange: (event: SyntheticEvent<HTMLInputElement>) => void,
    onSearchByChange: (event: SyntheticEvent<HTMLElement>) => void,
    onSubmit: (event: SyntheticEvent<HTMLElement>) => void,
};

export default function SearchForm({
    query,
    searchBy,
    onQueryChange,
    onSearchByChange,
    onSubmit,
}: Props) {
    return (
        <form className="search-form" onSubmit={onSubmit}>
            <InputText
                className="search-input"
                placeholder="Search..."
                type="text"
                required
                value={query || ''}
                onChange={onQueryChange}
            />
            <SearchBy searchBy={searchBy} onChange={onSearchByChange} />
            <Button
                className="p-button-danger search-button"
                type="submit"
                label="Search"
            />
        </form>
    );
}

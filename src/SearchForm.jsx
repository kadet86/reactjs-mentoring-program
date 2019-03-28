import React from 'react';
import SearchBy from './SearchBy';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

export default function SearchForm({
    query, 
    searchBy, 
    onQueryChange, 
    onSearchByChange, 
    onSubmit,
}) {
    return (
        <form className="search-form" onSubmit={onSubmit}>
            <InputText 
                className="search-input"
                placeholder="Search..." 
                type="text" 
                value={query} 
                onChange={onQueryChange} />
            <SearchBy 
                searchBy={searchBy} 
                onChange={onSearchByChange} />
            <Button
                className="p-button-danger search-button" 
                type="submit" 
                label="Search" />
        </form>
    );
}
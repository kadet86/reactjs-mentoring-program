import React from 'react';
import SortBy from './SortBy';
import {Toolbar} from 'primereact/toolbar';

export default function SearchResultsInfo({resultsCount, sortBy, onSortByChange}) {
    return (
        <Toolbar className="movie-list-toolbar">
            <label className="movie-list-toolbar__label">{resultsCount} movies found</label>
            <SortBy sortBy={sortBy} onSortByChange={onSortByChange}/>
        </Toolbar>
    );
}
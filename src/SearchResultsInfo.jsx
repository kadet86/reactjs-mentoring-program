// @flow
import * as React from 'react';
import SortBy from './SortBy';
import { Toolbar } from 'primereact/toolbar';

type Props = {
    resultsCount: number,
    sortBy: string,
    onSortByChange: (event: SyntheticEvent<HTMLElement>) => void,
};

export default function SearchResultsInfo({
    resultsCount,
    sortBy,
    onSortByChange,
}: Props) {
    return (
        <Toolbar className="movie-list-toolbar">
            <label className="movie-list-toolbar__label">
                {resultsCount} movies found
            </label>
            <SortBy sortBy={sortBy} onSortByChange={onSortByChange} />
        </Toolbar>
    );
}

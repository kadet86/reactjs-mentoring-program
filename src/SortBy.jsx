import React from 'react';

export default function SortBy({sortBy, onSortByChange}) {
    return (
        <div className="sort-by">
            <label>Sort by</label>
            <a
                className={'sort-by__link' + (sortBy === 'release_date' ? ' sort-by__link--active': '')}
                data-value="release_date" 
                href="javascript:void(0);"
                onClick={onSortByChange}>
                release date
            </a>
            <a 
                className={'sort-by__link' + (sortBy === 'vote_average' ? ' sort-by__link--active': '')}
                data-value="vote_average" 
                href="javascript:void(0);"
                onClick={onSortByChange}>
                rating
            </a>
        </div>
    );
}
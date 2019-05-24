// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
    sortBy: string,
    onSortByChange: (event: SyntheticEvent<HTMLElement>) => void,
};

const SortByContainer = styled.div`
    float: right;

    .sort-by__link {
        padding-right: 10px;
    }

    .sort-by__link--active {
        color: red;
    }
    
    label {
        padding-right: 10px;
    }
`;

export default function SortBy({ sortBy, onSortByChange }: Props) {
    return (
        <SortByContainer>
            <label>Sort by</label>
            <a
                className={
                    'sort-by__link' +
                    (sortBy === 'release_date' ? ' sort-by__link--active' : '')
                }
                data-value="release_date"
                href="javascript:void(0);"
                onClick={onSortByChange}
            >
                release date
            </a>
            <a
                className={
                    'sort-by__link' +
                    (sortBy === 'vote_average' ? ' sort-by__link--active' : '')
                }
                data-value="vote_average"
                href="javascript:void(0);"
                onClick={onSortByChange}
            >
                rating
            </a>
        </SortByContainer>
    );
}

// @flow
import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

type Props = {
    searchBy: string,
    onChange: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

const SearchByContainer = styled.div`
    display: inline-block;
    font-size: 12px;

    label {
        margin-right: 20px;
        color: white;
    }

    button {
        margin-right: 12px;
        font-size: 12px;
    }
`;

export default function SearchBy({ searchBy, onChange }: Props) {
    return (
        <SearchByContainer>
            <label>SEARCH BY</label>
            <Button
                type="button"
                className={
                    searchBy === 'title' ? 'button-danger' : 'button-secondary'
                }
                data-value="title"
                onClick={onChange}
                label="Title"
            />
            <Button
                type="button"
                className={
                    searchBy === 'genres' ? 'button-danger' : 'button-secondary'
                }
                data-value="genres"
                onClick={onChange}
                label="Genre"
            />
        </SearchByContainer>
    );
}

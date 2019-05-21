// @flow
import * as React from 'react';
import SearchBy from './SearchBy';
import styled from 'styled-components';
import Button from './Button';
import InputText from './InputText';

type Props = {
    query?: string,
    searchBy: string,
    onQueryChange: (event: SyntheticEvent<HTMLInputElement>) => void,
    onSearchByChange: (event: SyntheticEvent<HTMLElement>) => void,
    onSubmit: (event: SyntheticEvent<HTMLElement>) => void,
};

const Form = styled.form`
    margin-bottom: 20px;

    > button {
        font-size: 16px;
        float: right;
    }
`;

export default function SearchForm({
    query,
    searchBy,
    onQueryChange,
    onSearchByChange,
    onSubmit,
}: Props) {
    return (
        <Form className="search-form" onSubmit={onSubmit}>
            <InputText
                placeholder="Search..."
                type="text"
                required
                value={query || ''}
                onChange={onQueryChange}
            />
            <SearchBy searchBy={searchBy} onChange={onSearchByChange} />
            <Button type="submit" label="Search" className="button-danger" />
        </Form>
    );
}

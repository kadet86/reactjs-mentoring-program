// @flow
import * as React from 'react';
import { Button } from 'primereact/button';

type Props = {
    searchBy: string,
    onChange: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

export default function SearchBy({ searchBy, onChange }: Props) {
    return (
        <div className="search-by">
            <label>SEARCH BY</label>
            <Button
                type="button"
                className={
                    searchBy === 'title'
                        ? 'p-button-danger'
                        : 'p-button-secondary'
                }
                data-value="title"
                onClick={onChange}
                label="Title"
            />
            <Button
                type="button"
                className={
                    searchBy === 'genres'
                        ? 'p-button-danger'
                        : 'p-button-secondary'
                }
                data-value="genres"
                onClick={onChange}
                label="Genre"
            />
        </div>
    );
}

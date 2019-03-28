import React from 'react';
import {Button} from 'primereact/button';

export default function SearchBy({searchBy, onChange}) {
    return (
        <div className="search-by">
            <label>SEARCH BY</label>
            <Button
                className={searchBy === 'title' ? 'p-button-danger' : 'p-button-secondary'}
                data-value="title" 
                onClick={onChange} 
                label="Title" />
            <Button
                className={searchBy === 'genres' ? 'p-button-danger' : 'p-button-secondary'}
                data-value="genres" 
                onClick={onChange}
                label="Genre" />
        </div>
    );
}
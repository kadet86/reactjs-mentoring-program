import React from 'react';
import Movie from './Movie';
import GenreMovieList from './GenreMovieList';
import {Button} from 'primereact/button';
import TopSection from './TopSection';

export default function MoviePage({movie, navigateBack, navigateToMovie}) {
    return (
        <section className="movie-page">
            <TopSection>
                <Button onClick={navigateBack} label="SEARCH" className="p-button-secondary" />
                <Movie movie={movie} />
            </TopSection>
            <GenreMovieList genre={movie.genres[0]} navigateToMovie={navigateToMovie} />
        </section>
    );
}
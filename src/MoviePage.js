import React from 'react';
import Movie from './Movie';
import GenreMovieList from './GenreMovieList';

export default function MoviePage({movie, navigateBack, navigateToMovie}) {
    return (
        <section>
            <div className="top-section">
                <div>
                    <button onClick={navigateBack}>Search</button>
                    <Movie movie={movie} />
                </div>
            </div>
            <GenreMovieList genre={movie.genres[0]} navigateToMovie={navigateToMovie} />
        </section>
    );
}
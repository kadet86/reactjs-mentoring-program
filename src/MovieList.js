import React from 'react';
import MovieListItem from './MovieListItem';

export default function MovieList({movies, navigateToMovie}) {
    return (
        <section className="movie-list">
            {movies.map(movie => 
            <MovieListItem 
                navigateToMovie={navigateToMovie} 
                movie={movie} 
                key={movie.id} />)}
        </section>
    );
}
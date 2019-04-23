import React from 'react';
import MovieListItem from './MovieListItem';

export default function MovieList({movies}) {
    return (
        <section className="movie-list">
            {movies.map(movie => 
            <MovieListItem  
                movie={movie} 
                key={movie.id} />)}
        </section>
    );
}
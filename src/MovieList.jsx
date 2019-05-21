// @flow
import * as React from 'react';
import MovieListItem from './MovieListItem';
import type { MovieInfo } from './MovieListItem';

type Props = {
    movies: Array<MovieInfo>,
};

export default function MovieList({ movies }: Props) {
    return (
        <section className="movie-list">
            {movies &&
                movies.map((movie: MovieInfo) => (
                    <MovieListItem movie={movie} key={movie.id} />
                ))}
        </section>
    );
}

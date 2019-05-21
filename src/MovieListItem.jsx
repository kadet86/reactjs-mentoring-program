// @flow
import * as React from 'react';
import Link from 'next/link';

export type MovieInfo = {
    id: string,
    poster_path: string,
    title: string,
    release_date?: string,
    genres?: string[],
};

type Props = {
    movie: MovieInfo,
    query?: string,
};

export default function MovieListItem({ movie, query }: Props) {
    return (
        <div className="movie-list-item">
            <Link href={`/film?id=${movie.id}`} as={`/film/${movie.id}`}>
                <img src={movie.poster_path} />
            </Link>
            <div>
                <h2>{movie.title}</h2>
                <span className="movie-list-item__date">
                    {movie.release_date && movie.release_date.substr(0, 4)}
                </span>
            </div>
            <div className="movie-list-item__genres">
                {movie.genres && movie.genres.join(' & ')}
            </div>
        </div>
    );
}

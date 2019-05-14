import Link from 'next/link';
import React from 'react';

export default function MovieListItem({ movie, query }) {
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

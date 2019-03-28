import React from 'react';

export default function MovieListItem({movie, navigateToMovie}) {
    return (
        <div className="movie-list-item">
            <a onClick={() => navigateToMovie(movie)}>
                <img src={movie.poster_path} />
            </a>
            <div>
                <h2>{movie.title}</h2>
                <span className="movie-list-item__date">
                    {movie.release_date.substr(0, 4)}
                </span>
            </div>
            <div className="movie-list-item__genres">{movie.genres.join(' & ')}</div>
        </div>
    );
}
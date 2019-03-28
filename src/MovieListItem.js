import React from 'react';

export default function MovieListItem({movie, navigateToMovie}) {
    return (
        <div className="movie-list-item">
            <a onClick={() => navigateToMovie(movie)}>
                <img src={movie.poster_path} />
            </a>
            <div>
                <h2>{movie.title}</h2>
                <span>{movie.release_date.substr(0, 4)}</span>
            </div>
            <div>{movie.genres.join(' & ')}</div>
        </div>
    );
}
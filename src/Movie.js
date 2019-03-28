import React from 'react';

export default function Movie({movie}) {
    return (
        <article className="movie">
            <img src={movie.poster_path} width="200" />
            <div className="movie__description">
                <h2>{movie.title}</h2>
                <div>{movie.vote_average}</div>
                <div>{movie.tagline}</div>
                <div>{movie.release_date.substr(0, 4)}</div>
                <div>{movie.runtime} min</div>
                <div>{movie.overview}</div>
            </div>
        </article>
    );
}
// @flow
import * as React from 'react';
import styled from 'styled-components';

export type FullMovieInfo = {
    poster_path: string,
    title: string,
    vote_average: string,
    tagline: string,
    release_date?: string,
    runtime?: number,
    overview: string,
    genres?: string[],
};

type Props = {
    movie: FullMovieInfo,
};

const MovieContainer = styled.article`
    position: relative;

    img {
        max-width: 200px;
        width: auto;
        height: auto;
    }

    .movie__description {
        position: absolute;
        top: 0;
        left: 220px;
        width: 450px;
    }

    .movie__description h2 {
        display: inline-block;
        margin: 0;
        color: #d8083ed9;
    }

    .movie__rating {
        display: inline-block;
        border: 1px solid darkkhaki;
        border-radius: 14px;
        width: 28px;
        height: 28px;
        line-height: 26px;
        text-align: center;
        color: darkkhaki;
        margin-left: 12px;
        font-size: 12px;
        position: relative;
        top: -2px;
    }

    .movie__date {
        margin-right: 20px;
    }

    .movie__tagline,
    .movie__overview {
        color: #aaa;
    }

    .movie__overview {
        margin-top: 20px;
        max-height: 200px;
        overflow: hidden;
    }
`;

export default function Movie({ movie }: Props) {
    return (
        <MovieContainer>
            <img src={movie.poster_path} />
            <div className="movie__description">
                <h2>{movie.title}</h2>&nbsp;
                <div className="movie__rating">{movie.vote_average}</div>
                <div className="movie__tagline">{movie.tagline}</div>
                <span className="movie__date">
                    {movie.release_date && movie.release_date.substr(0, 4)}
                </span>
                <span className="movie__duration">
                    {movie.runtime || 0} min
                </span>
                <div className="movie__overview">{movie.overview}</div>
            </div>
        </MovieContainer>
    );
}

// @flow
import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

const MovieListItemContainer = styled.div`
    width: 250px;
    margin-bottom: 20px;

    img {
        width: 100%;
    }

    h2 {
        display: inline-block;
        padding: 0;
        font-size: 12px;
        text-transform: uppercase;
        width: 210px;
    }

    .movie-list-item__date {
        float: right;
        margin-top: 8px;
        font-size: 10px;
        padding: 1px 4px;
        border: 1px solid #999;
        border-radius: 2px;
    }

    .movie-list-item__genres {
        font-size: 10px;
        color: #999;
        margin-top: -8px;
    }
`;

export default function MovieListItem({ movie, query }: Props) {
    return (
        <MovieListItemContainer>
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
        </MovieListItemContainer>
    );
}

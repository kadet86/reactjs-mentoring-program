// @flow
import * as React from 'react';
import MovieListItem from './MovieListItem';
import { List } from 'immutable';
import type { MovieInfo } from './MovieListItem';
import styled from 'styled-components';

type Props = {
    movies: List<MovieInfo>,
};

const MovieListContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
`;

export default function MovieList({ movies }: Props) {
    return (
        <MovieListContainer>
            {movies &&
                movies.map((movie: MovieInfo) => (
                    <MovieListItem movie={movie} key={movie.id} />
                ))}
        </MovieListContainer>
    );
}

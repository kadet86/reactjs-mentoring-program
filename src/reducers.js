import { handleActions } from 'redux-actions';
import {
    changeQuery,
    changeSearchBy,
    changeSortBy,
    showMovie,
    showMovies,
} from './actions';
import { List, Map } from 'immutable';

export const initialState = {
    movie: null,
    movies: List(),
    query: '',
    searchBy: 'title',
    sortBy: 'release_date',
};

export const moviesReducer = handleActions(
    {
        [changeQuery]: (state, action) => ({ ...state, query: action.payload }),
        [changeSortBy]: (state, action) => ({
            ...state,
            sortBy: action.payload,
        }),
        [changeSearchBy]: (state, action) => ({
            ...state,
            searchBy: action.payload,
        }),
        [showMovies]: (state, action) => ({
            ...state,
            movies: List(action.payload),
        }),
        [showMovie]: (state, action) => ({
            ...state,
            movie: Map(action.payload),
        }),
    },
    initialState
);

import {handleActions} from 'redux-actions';
import {showMovies, showMovie, changeQuery, changeSearchBy, changeSortBy} from './actions';

export const initialState = {
    movie: null, 
    movies: [],
    query: '',
    searchBy: 'title',
    sortBy: 'release_date',
};

export const moviesReducer = handleActions({
    [changeQuery]: (state, action) => ({...state, query: action.payload}),
    [changeSortBy]: (state, action) => ({...state, sortBy: action.payload}),
    [changeSearchBy]: (state, action) => ({...state, searchBy: action.payload}),
    [showMovies]: (state, action) => ({...state, movies: action.payload}),
    [showMovie]: (state, action) => ({...state, movie: action.payload}),
},
initialState);

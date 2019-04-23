import {handleActions} from 'redux-actions';
import {changeMovie, showMovies, changeQuery, changeSearchBy, changeSortBy} from './actions';

export const initialState = {
    movie: null, 
    movies: [],
    query: '',
    searchBy: 'title',
    sortBy: 'release_date',
};

export const moviesReducer = handleActions({
    [changeMovie]: (state, action) => ({...state, movie: action.payload}),
    [changeQuery]: (state, action) => ({...state, query: action.payload}),
    [changeSortBy]: (state, action) => ({...state, sortBy: action.payload}),
    [changeSearchBy]: (state, action) => ({...state, searchBy: action.payload}),
    [showMovies]: (state, action) => ({...state, movies: action.payload}),
},
initialState);

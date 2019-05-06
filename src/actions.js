import { createAction } from 'redux-actions';

export const changeQuery = createAction('CHANGE_QUERY');
export const changeSortBy = createAction('CHANGE_SORT_BY');
export const changeSearchBy = createAction('CHANGE_SEARCH_BY');
export const showMovies = createAction('SHOW_MOVIES');
export const showMovie = createAction('SHOW_MOVIE');

const URL = 'https://reactjs-cdp.herokuapp.com';
export const getMovies = ({query, searchBy, sortBy, limit}) => {
    return dispatch => {
        return fetch(`${URL}/movies?sortOrder=desc&limit=${limit
            }&search=${query}&searchBy=${searchBy}&sortBy=${sortBy}`)
            .then(res => res.json())
            .then(json => {
                dispatch(showMovies(json.data));
            });
    }
};

export const getMovie = ({id}) => {
    return dispatch => {
        return fetch(`${URL}/movies/${id}`)
            .then(res => res.json())
            .then(json => {
                dispatch(showMovie(json));
            });
    }
};

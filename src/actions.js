import { createAction } from 'redux-actions';

export const changeMovie = createAction('CHANGE_MOVIE');
export const changeQuery = createAction('CHANGE_QUERY');
export const changeSortBy = createAction('CHANGE_SORT_BY');
export const changeSearchBy = createAction('CHANGE_SEARCH_BY');
export const showMovies = createAction('SHOW_MOVIES');

const URL = 'https://reactjs-cdp.herokuapp.com/movies';
export const getMovies = ({query, searchBy, sortBy, limit}) => {
    return dispatch => {
        fetch(`${URL}?sortOrder=desc&limit=${limit
            }&search=${query}&searchBy=${searchBy}&sortBy=${sortBy}`)
            .then(res => res.json())
            .then(json => {
                dispatch(showMovies(json.data));
            });
    }
};

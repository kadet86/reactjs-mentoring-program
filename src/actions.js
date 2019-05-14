import 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { all, call, put, takeLatest } from 'redux-saga/effects';

const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE = 'GET_MOVIE_BY_ID';

export const changeQuery = createAction('CHANGE_QUERY');
export const changeSortBy = createAction('CHANGE_SORT_BY');
export const changeSearchBy = createAction('CHANGE_SEARCH_BY');
export const showMovies = createAction('SHOW_MOVIES');
export const showMovie = createAction('SHOW_MOVIE');
export const getMovies = createAction(GET_MOVIES);
export const getMovie = createAction(GET_MOVIE);

const URL = 'https://reactjs-cdp.herokuapp.com';

export function* getMoviesAsync(action) {
    const { query, searchBy, sortBy, limit } = action.payload;
    const response = yield call(
        fetch,
        `${URL}/movies?sortOrder=desc&limit=${limit}&search=${query}&searchBy=${searchBy ||
            'title'}&sortBy=${sortBy || 'release_date'}`
    );
    const json = yield response.json();
    yield put(showMovies(json && json.data));
}
export function* watchGetMovies() {
    yield takeLatest(GET_MOVIES, getMoviesAsync);
}

export function* getMovieAsync(action) {
    const { id } = action.payload;
    const response = yield call(fetch, `${URL}/movies/${id}`);
    const json = yield response.json();

    yield put(showMovie(json));
}
export function* watchGetMovie() {
    yield takeLatest(GET_MOVIE, getMovieAsync);
}

export function* moviesSaga() {
    yield all([watchGetMovies(), watchGetMovie()]);
}

export function* rootSaga() {
    yield all([moviesSaga()]);
}

import { moviesReducer } from "./reducers";
import { changeQuery, changeSearchBy, changeSortBy, showMovies, changeMovie } from "./actions";

describe('reducers', () => {
    describe('moviesReducer', () => {
        it('returns current state for unknown action', () => {
            const state = {};
            const newState = moviesReducer(state, {type: 'unknown'});
            expect(newState).toBe(state);
            expect(newState).toEqual({});
        });

        it('creates proper state for changeQuery() action', () => {
            const state = {query: 'query1'};
            const newState = moviesReducer(state, changeQuery('query2'));
            expect(newState).not.toBe(state);
            expect(newState).toEqual({query: 'query2'});
        });

        it('creates proper state for changeSearchBy() action', () => {
            const state = {searchBy: 'title'};
            const newState = moviesReducer(state, changeSearchBy('genres'));
            expect(newState).not.toBe(state);
            expect(newState).toEqual({searchBy: 'genres'});
        });

        it('creates proper state for changeSortBy() action', () => {
            const state = {sortBy: 'release_date'};
            const newState = moviesReducer(state, changeSortBy('rating'));
            expect(newState).not.toBe(state);
            expect(newState).toEqual({sortBy: 'rating'});
        });

        it('creates proper state for changeMovie() action', () => {
            const movie = {genres:['action']};
            const newMovie = {genres:['comedy']};
            const state = {movie};
            const newState = moviesReducer(state, changeMovie(newMovie));
            expect(newState).not.toBe(state);
            expect(newState).toEqual({movie: newMovie});
        });

        it('creates proper state for showMovies() action', () => {
            const movies = [];
            const newMovies = [{genres:['comedy']}, {genres: ['action']}];
            const state = {movies};
            const newState = moviesReducer(state, showMovies(newMovies));
            expect(newState).not.toBe(state);
            expect(newState).toEqual({movies: newMovies});
        });
    });
});
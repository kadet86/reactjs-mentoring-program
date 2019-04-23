import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getMovies, showMovies, getMovie, showMovie} from './actions';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    it('getMovies() action fetches movies and dispatches showMovies() with the result', () => {
        fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=50&search=green&searchBy=title&sortBy=rating', {
            body: { data: [] },
            headers: { 'content-type': 'application/json' },
        });
        const store = mockStore({ movies: [], movie: null });

        return store.dispatch(getMovies({
            query: 'green',
            searchBy: 'title',
            sortBy: 'rating',
            limit: 50,
        })).then(()=> {
            expect(store.getActions()).toEqual([new showMovies([])]);
        });
    });

    it('getMovie() action fetches movie and dispatches showMovie() with the result', () => {
        fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies/1', {
            body: { id: 1, genres: ['action'] },
            headers: { 'content-type': 'application/json' },
        });
        const store = mockStore({ movie: null });

        return store.dispatch(getMovie({id: 1})).then(()=> {
            expect(store.getActions()).toEqual([new showMovie({ id: 1, genres: ['action'] })]);
        });
    });
  });
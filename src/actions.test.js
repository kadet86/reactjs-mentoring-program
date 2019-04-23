import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getMovies, showMovies} from './actions';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    it('should create an action to add a todo', () => {
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
  });
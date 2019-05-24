import 'jsdom-global/register';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer, initialState } from './reducers';

Enzyme.configure({ adapter: new Adapter() });
global.fetch = fetch;

const createTestStore = (state = {}) => {
  const next = jest.fn();
  const invoke = action => thunk(store)(next)(action);

  const store = createStore(
    moviesReducer,
    { ...initialState, ...state },
    applyMiddleware(thunk),
  );

  return { store, next, invoke };
};

global.createTestStore = createTestStore;

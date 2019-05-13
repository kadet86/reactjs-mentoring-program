import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './actions';
import { initialState, moviesReducer } from './reducers';

export default (state = initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        moviesReducer,
        state,
        applyMiddleware(sagaMiddleware)
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

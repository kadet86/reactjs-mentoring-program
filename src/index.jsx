import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import {initialState, moviesReducer} from './reducers';

const store = createStore(
    moviesReducer,
    initialState,
    applyMiddleware(thunk),
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import { initialState, moviesReducer } from './reducers';

const store = createStore(moviesReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

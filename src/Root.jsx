import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';

const Root = ({ Router, store, context, location }) => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Router context={context} location={location}>
                    <App />
                </Router>
            </ErrorBoundary>
        </Provider>
    );
};

export default hot(module)(Root);

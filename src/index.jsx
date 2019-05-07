import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import configureStore from './configureStore';

const store = configureStore(window.PRELOADED_STATE);

hydrate(
    <Root Router={BrowserRouter} store={store} />,
    document.getElementById('root')
);

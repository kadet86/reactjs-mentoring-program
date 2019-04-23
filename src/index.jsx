import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { moviesReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'appstate',
  storage,
};

const persistedReducer = persistReducer(persistConfig, moviesReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
);
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

import 'primereact/resources/themes/nova-light/theme.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FilteredMovieList from './FilteredMovieList';
import './main.css';
import MoviePage from './MoviePage';
import { NotFound } from './NotFound';

const App = () => {
    return (
        <main className="app">
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => <Redirect to="/search" />}
                />
                <Route
                    path="/search/:query?/:searchBy?/:sortBy?"
                    component={FilteredMovieList}
                />
                <Route path="/film/:id" component={MoviePage} />
                <Route component={NotFound} />
            </Switch>
        </main>
    );
};

export default App;

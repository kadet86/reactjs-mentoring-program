import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import FilteredMovieList from './FilteredMovieList';
import MoviePage from './MoviePage';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './main.css';
import 'primereact/resources/themes/nova-light/theme.css';
import { NotFound } from './NotFound';

const App = () => {
    return (
        <ErrorBoundary>
            <main className="app">
                <Router>
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/search" />} />
                        <Route path="/search/:query?/:searchBy?/:sortBy?" component={FilteredMovieList} />
                        <Route path="/film/:id" component={MoviePage} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </main>
        </ErrorBoundary>
    );
}

export default App;
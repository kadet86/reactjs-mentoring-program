import React, {Component} from 'react';
import ErrorBoundary from './ErrorBoundary';
import FilteredMovieList from './FilteredMovieList';
import MoviePage from './MoviePage';
import { connect } from 'react-redux';
import {changeMovie} from './actions';

import './main.css';
import 'primereact/resources/themes/nova-light/theme.css';

const App = ({changeMovie, movie}) => {
    const navigateToMovie = (movie) => {
        changeMovie(movie);
    };

    const navigateToSearch = () => {
        changeMovie(null);
    };

    return (
        <ErrorBoundary>
            <section className="app">
                {!movie && 
                <FilteredMovieList navigateToMovie={navigateToMovie}/> }
                {movie && 
                <MoviePage 
                    movie={movie} 
                    navigateBack={navigateToSearch}
                    navigateToMovie={navigateToMovie} /> }
            </section>
        </ErrorBoundary>
    );
}

const mapStateToProps = (state) => ({movie: state.movie});
const mapDispatchToProps = {changeMovie};

export default connect(mapStateToProps, mapDispatchToProps)(App);

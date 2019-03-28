import React, {Component} from 'react';
import ErrorBoundary from './ErrorBoundary';
import FilteredMovieList from './FilteredMovieList';
import MoviePage from './MoviePage';
import './main.css';
import 'primereact/resources/themes/nova-light/theme.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {movie: null};
    }

    navigateToMovie = (movie) => {
        this.setState({movie});
    }

    navigateToSearch = () => {
        this.setState({movie: null});
    }

    render() {
        return (
            <ErrorBoundary>
                <section className="app">
                    {!this.state.movie && 
                    <FilteredMovieList navigateToMovie={this.navigateToMovie}/> }
                    {this.state.movie && 
                    <MoviePage 
                        movie={this.state.movie} 
                        navigateBack={this.navigateToSearch}
                        navigateToMovie={this.navigateToMovie} /> }
                </section>
            </ErrorBoundary>
        );
    }
}

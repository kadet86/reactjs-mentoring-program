import React from 'react';
import MovieList from './MovieList';
import {Toolbar} from 'primereact/toolbar';

const URL = 'https://reactjs-cdp.herokuapp.com/movies';

export default class GenreMovieList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }

    fetchMovies() {
        fetch(`${URL}?sortOrder=desc&limit=6&sortBy=vote_average&searchBy=genre&search=${this.props.genre}`)
            .then(res => res.json())
            .then(json => {
                this.setState({movies: json.data});
            });
    }

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return (
            <section>
                <Toolbar className="movie-list-toolbar">
                    <label className="movie-list-toolbar__label">Films by {this.props.genre} genre</label>
                </Toolbar>
                <MovieList 
                    movies={this.state.movies} 
                    navigateToMovie={this.props.navigateToMovie} />
            </section>
        );
    }
}
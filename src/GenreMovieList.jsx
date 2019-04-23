import React from 'react';
import MovieList from './MovieList';
import {Toolbar} from 'primereact/toolbar';
import {connect} from 'react-redux';
import {getMovies} from './actions';

class GenreMovieList extends React.PureComponent {
    fetchMovies() {
        this.props.getMovies({
            limit: 9,
            sortBy: 'vote_average',
            searchBy: 'genres',
            query: this.props.genre,
        });

        document.documentElement.scrollTop = 0;
    }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        if (this.props.genre !== prevProps.genre) {
            this.fetchMovies();
        }
    }

    render() {
        return (
            <section>
                <Toolbar className="movie-list-toolbar">
                    <label className="movie-list-toolbar__label">Films by {this.props.genre} genre</label>
                </Toolbar>
                <MovieList 
                    movies={this.props.movies} 
                    navigateToMovie={this.props.navigateToMovie} />
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
});

const mapDispatchToProps = {getMovies};

export default connect(mapStateToProps, mapDispatchToProps)(GenreMovieList);

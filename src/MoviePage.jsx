import React from 'react';
import Movie from './Movie';
import GenreMovieList from './GenreMovieList';
import { Button } from 'primereact/button';
import TopSection from './TopSection';
import { getMovie, showMovie } from './actions';
import { connect } from 'react-redux';
import { buildSearchPath } from './FilteredMovieList';

class MoviePage extends React.PureComponent {
    UNSAFE_componentWillMount() {
        this.fetchMovie();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            document.documentElement.scrollTop = 0;
            this.fetchMovie();
        }
    }

    fetchMovie() {
        this.props.getMovie({ id: this.props.match.params.id });
    }

    navigateToSearch = () => {
        this.props.history.push(buildSearchPath(this.props));
    };

    render() {
        const movie = this.props.movie || {};
        const genre = movie && movie.genres && movie.genres[0];
        return (
            <section className="movie-page">
                <TopSection>
                    <Button
                        onClick={this.navigateToSearch}
                        label="SEARCH"
                        className="p-button-secondary"
                    />
                    <Movie movie={movie} />
                </TopSection>
                <GenreMovieList genre={genre} />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    query: state.query,
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    movie: state.movie,
});

const mapDispatchToProps = { getMovie, showMovie };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePage);

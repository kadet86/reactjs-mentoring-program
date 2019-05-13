import Router from 'next/router';
import { Button } from 'primereact/button';
import React from 'react';
import { connect } from 'react-redux';
import { getMovie, showMovie } from './actions';
import { buildSearchRoute } from './FilteredMovieList';
import GenreMovieList from './GenreMovieList';
import Movie from './Movie';
import TopSection from './TopSection';

class MoviePage extends React.PureComponent {
    componentDidMount() {
        this.fetchMovie();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.router.query.id !== this.props.router.query.id) {
            document.documentElement.scrollTop = 0;
            this.fetchMovie();
        }
    }

    fetchMovie() {
        this.props.getMovie({ id: this.props.router.query.id });
    }

    navigateToSearch = () => {
        const { url, as } = buildSearchRoute(this.props);
        Router.push(url, as);
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

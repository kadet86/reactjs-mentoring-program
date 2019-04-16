import React from 'react';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import SearchResultsInfo from './SearchResultsInfo';
import TopSection from './TopSection';
import { getMovies, changeSortBy, changeQuery, changeSearchBy } from './actions';

import { connect } from "react-redux";

const MOVIES_LIMIT = 50;

export class FilteredMovieList extends React.PureComponent {
    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies(params = {}) {
        this.props.getMovies({
            limit: MOVIES_LIMIT,
            query: this.props.query,
            searchBy: this.props.searchBy,
            sortBy: this.props.sortBy,
            ...params,
        });
    }

    onQueryChange = (event) => {
        this.props.changeQuery(event.target.value);
    }

    onSortByChange = (event) => {
        const sortBy = event.target.getAttribute('data-value');
        this.props.changeSortBy(sortBy);
        this.fetchMovies({sortBy});
    }

    onSearchByChange = (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.tagName !== 'BUTTON') {
            target = target.parentNode;
        }
        this.props.changeSearchBy(target.getAttribute('data-value'));
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.fetchMovies();
    }

    render() {
        return (
            <section className="filtered-movie-list">
                <TopSection>
                    <h1>FIND YOUR MOVIE</h1>
                    <SearchForm 
                        query={this.props.query} 
                        searchBy={this.props.searchBy} 
                        onSearchByChange={this.onSearchByChange}
                        onQueryChange={this.onQueryChange}
                        onSubmit={this.onSubmit} />
                </TopSection>
                <SearchResultsInfo 
                    resultsCount={this.props.movies.length}
                    sortBy={this.props.sortBy} 
                    onSortByChange={this.onSortByChange} />
                <MovieList 
                    movies={this.props.movies} 
                    navigateToMovie={this.props.navigateToMovie} />
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    query: state.query,
    sortBy: state.sortBy,
    searchBy: state.searchBy,
    movies: state.movies,
});

const mapDispatchToProps = {getMovies, changeSortBy, changeQuery, changeSearchBy};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredMovieList);
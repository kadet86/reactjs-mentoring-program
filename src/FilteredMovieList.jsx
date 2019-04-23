import React from 'react';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import SearchResultsInfo from './SearchResultsInfo';
import TopSection from './TopSection';
import {Toolbar} from 'primereact/toolbar';
import { getMovies, changeSortBy, changeQuery, changeSearchBy, showMovies } from './actions';
import { connect } from "react-redux";

const MOVIES_LIMIT = 50;

export function buildSearchPath({query, searchBy, sortBy}) {
    return `/search/${encodeURIComponent(query)}/${searchBy}/${sortBy}`;
}

export class FilteredMovieList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.syncParams();
    }

    syncParams() {
        const {query, searchBy, sortBy} = this.props.match.params;

        if (query !== this.props.query) {
            this.props.changeQuery(query);
        }

        if (searchBy && searchBy !== this.props.searchBy) {
            this.props.changeSearchBy(searchBy);
        }

        if (sortBy && sortBy !== this.props.sortBy) {
            this.props.changeSortBy(sortBy);
        }
        
    }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.syncParams();
            this.fetchMovies();
        }
    }

    navigate() {
        this.props.history.push(buildSearchPath(this.props));
    }

    fetchMovies(params = {}) {
        const {query, searchBy, sortBy} = this.props.match.params;
        if (!query) {
            this.props.showMovies([]);
            return;
        }

        this.props.getMovies({
            limit: MOVIES_LIMIT,
            query,
            searchBy,
            sortBy,
            ...params,
        });
    }

    onQueryChange = (event) => {
        this.props.changeQuery(event.target.value);
    }

    onSortByChange = (event) => {
        const sortBy = event.target.getAttribute('data-value');
        this.props.changeSortBy(sortBy);
        this.navigate();
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
        this.navigate();
    }

    render() {
        const noResults = !this.props.movies || this.props.movies.length === 0;
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
                {!noResults &&
                <> 
                    <SearchResultsInfo 
                        resultsCount={this.props.movies.length}
                        sortBy={this.props.sortBy} 
                        onSortByChange={this.onSortByChange} />
                    <MovieList 
                        movies={this.props.movies} 
                        navigateToMovie={this.props.navigateToMovie} />
                </>
                }
                {noResults && 
                <>
                    <Toolbar />
                    <section className="no-results">
                        <h1>No films found</h1>
                    </section>
                </>
                }
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

const mapDispatchToProps = {getMovies, changeSortBy, changeQuery, changeSearchBy, showMovies};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredMovieList);
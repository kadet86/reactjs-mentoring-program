import React from 'react';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import SearchResultsInfo from './SearchResultsInfo';

const URL = 'https://reactjs-cdp.herokuapp.com/movies';

export default class FilteredMovieList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            query: '',
            searchBy: 'title',
            sortBy: 'release_date'
        };
    }

    fetchMovies() {
        const {query, searchBy, sortBy} = this.state;

        fetch(`${URL}?sortOrder=desc&limit=50&search=${query}&searchBy=${searchBy}&sortBy=${sortBy}`)
            .then(res => res.json())
            .then(json => {
                this.setState({movies: json.data});
            });
    }

    componentDidMount() {
        this.fetchMovies();
    }

    onQueryChange = (event) => {
        this.setState({query: event.target.value});
    }

    onSortByChange = (event) => {
        this.setState({sortBy: event.target.getAttribute('data-value')}, () => {
            this.fetchMovies();
        });
    }

    onSearchByChange = (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.tagName !== 'BUTTON') {
            target = target.parentNode;
        }
        this.setState({searchBy: target.getAttribute('data-value')});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.fetchMovies();
    }

    render() {
        return (
            <section className="filtered-movie-list">
                <div className="top-section">
                    <div>
                    <h1>FIND YOUR MOVIE</h1>
                    <SearchForm 
                        query={this.state.query} 
                        searchBy={this.state.searchBy} 
                        onSearchByChange={this.onSearchByChange}
                        onQueryChange={this.onQueryChange}
                        onSubmit={this.onSubmit} />
                    </div>
                </div>
                <SearchResultsInfo 
                    resultsCount={this.state.movies.length}
                    sortBy={this.state.sortBy} 
                    onSortByChange={this.onSortByChange} />
                <MovieList 
                    movies={this.state.movies} 
                    navigateToMovie={this.props.navigateToMovie} />
            </section>
        );
    }
}
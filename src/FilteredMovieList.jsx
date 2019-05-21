// @flow
import * as React from 'react';
import Router from 'next/router';
import { Toolbar } from 'primereact/toolbar';
import { connect } from 'react-redux';
import {
    changeQuery,
    changeSearchBy,
    changeSortBy,
    getMovies,
    showMovies,
} from './actions';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import SearchResultsInfo from './SearchResultsInfo';
import TopSection from './TopSection';
import type { MovieInfo } from './MovieListItem';
import { createSelector } from 'reselect';
import styled from 'styled-components';
export const MOVIES_LIMIT = 50;

export function buildSearchRoute({
    query,
    searchBy,
    sortBy,
}: {
    query: string,
    searchBy: string,
    sortBy: string,
}) {
    if (!query) {
        return {
            url: '/search',
            as: '/search',
        };
    }

    query = encodeURIComponent(query);
    return {
        url: `/search?query=${query}&searchBy=${searchBy}&sortBy=${sortBy}`,
        as: `/search/${query}/${searchBy}/${sortBy}`,
    };
}

type RouterInfo = {
    asPath: string,
    query: {
        query?: string,
        searchBy?: string,
        sortBy?: string,
    },
};

type Props = {
    query: string,
    searchBy: string,
    sortBy: string,
    movies: any[],
    router: RouterInfo,
    showMovies: (movies: MovieInfo[]) => void,
    getMovies: ({
        limit: number,
        query?: string,
        searchBy?: string,
        sortBy?: string,
    }) => void,
    changeQuery: (query?: string) => void,
    changeSearchBy: (searchBy?: string | null) => void,
    changeSortBy: (sortBy?: string | null) => void,
};

const Section = styled.section`
    width: 100%;
`;

const CustomToolbar = styled(Toolbar)`
    height: 40px;
`;

const Header = styled.h1`
    margin: 0;
    margin-bottom: 10px;
    font-size: 14px;
    color: white;
`;

const NoResultsSection = styled.section`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NoResultsSectionHeader = styled.h1`
    color: black;
    font-size: 36px;
`;

export class FilteredMovieList extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);

        this.onQueryChange = this.onQueryChange.bind(this);
        this.onSearchByChange = this.onSearchByChange.bind(this);
        this.onSortByChange = this.onSortByChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.syncParams();
    }

    syncParams() {
        const { query, searchBy, sortBy } = this.props.router.query;

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

    componentDidUpdate(prevProps: Props) {
        if (prevProps.router.asPath !== this.props.router.asPath) {
            this.syncParams();
            this.fetchMovies();
        }
    }

    navigate(params: any = {}) {
        const { url, as } = buildSearchRoute({
            ...this.props,
            ...params,
        });
        Router.push(url, as);
    }

    fetchMovies() {
        const { query, searchBy, sortBy } = this.props.router.query;
        if (!query) {
            this.props.showMovies([]);
            return;
        }

        this.props.getMovies({
            limit: MOVIES_LIMIT,
            query,
            searchBy,
            sortBy,
        });
    }

    /*:: onQueryChange: () => void */
    onQueryChange(event: SyntheticEvent<HTMLInputElement>): void {
        this.props.changeQuery(event.currentTarget.value);
    }

    /*:: onSortByChange: () => void */
    onSortByChange(event: SyntheticEvent<HTMLElement>): void {
        const sortBy = event.currentTarget.getAttribute('data-value');
        this.props.changeSortBy(sortBy);
        this.navigate({ sortBy });
    }

    /*:: onSearchByChange: () => void */
    onSearchByChange(event: SyntheticEvent<HTMLElement>): void {
        event.preventDefault();
        this.props.changeSearchBy(
            event.currentTarget.getAttribute('data-value')
        );
    }

    /*:: onSubmit: () => void */
    onSubmit(event: SyntheticEvent<HTMLElement>): void {
        event.preventDefault();
        this.navigate();
    }

    render() {
        const noResults = !this.props.movies || this.props.movies.length === 0;
        return (
            <Section>
                <TopSection>
                    <Header>FIND YOUR MOVIE</Header>
                    <SearchForm
                        query={this.props.query}
                        searchBy={this.props.searchBy}
                        onSearchByChange={this.onSearchByChange}
                        onQueryChange={this.onQueryChange}
                        onSubmit={this.onSubmit}
                    />
                </TopSection>
                {!noResults && (
                    <>
                        <SearchResultsInfo
                            resultsCount={this.props.movies.length}
                            sortBy={this.props.sortBy}
                            onSortByChange={this.onSortByChange}
                        />
                        <MovieList movies={this.props.movies} />
                    </>
                )}
                {noResults && (
                    <>
                        <Toolbar />
                        <NoResultsSection>
                            <NoResultsSectionHeader>
                                No films found
                            </NoResultsSectionHeader>
                        </NoResultsSection>
                    </>
                )}
            </Section>
        );
    }
}

const getStateMovies = state => state.movies;
const moviesSelector = createSelector(
    getStateMovies,
    movies => movies
);
const makeMapStateToProps = () => {
    const mapStateToProps = state => {
        return {
            query: state.query,
            sortBy: state.sortBy,
            searchBy: state.searchBy,
            movies: moviesSelector(state),
        };
    };
    return mapStateToProps;
};

const mapDispatchToProps = {
    getMovies,
    changeSortBy,
    changeQuery,
    changeSearchBy,
    showMovies,
};

export default connect(
    makeMapStateToProps,
    mapDispatchToProps
)(FilteredMovieList);

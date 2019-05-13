import { withRouter } from 'next/router';
import React from 'react';
import { getMovies } from '../src/actions';
import App from '../src/App';
import FilteredMovieList, { MOVIES_LIMIT } from '../src/FilteredMovieList';

const SearchPage = withRouter(({ router }) => (
    <App>
        <FilteredMovieList router={router} />
    </App>
));

SearchPage.getInitialProps = async ({ ctx }) => {
    const { isServer, query: queryObj, store } = ctx;
    if (isServer) {
        const { query, searchBy, sortBy } = queryObj;
        if (query) {
            store.dispatch(
                getMovies({
                    query,
                    searchBy,
                    sortBy,
                    limit: MOVIES_LIMIT,
                })
            );
        }
    }

    return {};
};

export default SearchPage;

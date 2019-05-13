import { withRouter } from 'next/router';
import React from 'react';
import { getMovie } from '../src/actions';
import App from '../src/App';
import MoviePage from '../src/MoviePage';

const FilmPage = withRouter(({ router }) => (
    <App>
        <MoviePage router={router} />
    </App>
));

FilmPage.getInitialProps = async ({ ctx }) => {
    const { isServer, query: queryObj, store } = ctx;
    if (isServer) {
        const { id } = queryObj;
        if (id) {
            store.dispatch(getMovie({ id }));
        }
    }

    return {};
};

export default FilmPage;

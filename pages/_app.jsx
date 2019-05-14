import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';
import ErrorBoundary from '../src/ErrorBoundary';

class NextApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <ErrorBoundary>
                        <Component {...pageProps} />
                    </ErrorBoundary>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga(NextApp));

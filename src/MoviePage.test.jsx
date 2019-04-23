import React from 'react';
import {shallow} from 'enzyme';
import MoviePage from './MoviePage';
import {Provider} from "react-redux";

describe('MoviePage component', () => {
    beforeEach(() => {
        fetch.resetMocks();
        fetch.mockResponse(JSON.stringify({ data: [] }));
    });

    it('has persistent snapshot with movie={{genres: []}}', () => {
        const {store} = createTestStore();
        const component = createComponent(store);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with movie={{genres: ["action"]}}', () => {
        const {store} = createTestStore();
        const component = createComponent(store, {movie: {genres: ['action']}});
        expect(component.html()).toMatchSnapshot();
    });

    function createComponent(store, props = {movie: {genres: []}}) {
        const component = shallow(
            <Provider store={store}>
                <MoviePage {...props} />
            </Provider>,
        );

        return component;
    }
});

import React from 'react';
import App from './App';
import {shallow, mount} from 'enzyme';
import {Provider} from "react-redux";

describe('App component', () => {
    beforeEach(() => {
        fetch.resetMocks();
        fetch.mockResponse(JSON.stringify({ data: [] }));
    });

    it('has persistent default snapshot', () => {
        const {store} = createTestStore();
        const component = createComponent(store);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot after a movie is selected', () => {
        const {store} = createTestStore({
            movies: [
                { genres: ['action'], id: 1 },
            ],
        });
        const component = createComponent(store, true);

        component.find('.movie-list-item a').first().simulate('click');
        
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot after navigating back to search page', () => {
        const {store} = createTestStore({
            movie: { genres: ['action'], id: 1 },
        });
        const component = createComponent(store, true);

        component.find('.movie-page button').first().simulate('click');
        
        expect(component.html()).toMatchSnapshot();
    });

    function createComponent(store, doMount = false) {
        const renderer = doMount ? mount : shallow;
        const component = renderer(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        return component;
    }
});


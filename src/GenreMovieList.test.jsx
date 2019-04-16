import React from 'react';
import {shallow, mount} from 'enzyme';
import GenreMovieList from './GenreMovieList';
import {Provider} from "react-redux";

describe('GenreMovieList component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('has persistent default snapshot', () => {
        const {store} = createTestStore({movies: []});
        const component = createComponent(store);
        expect(component.html()).toMatchSnapshot();
    });

    it('fetches movies when component did mount', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [] }));
        const {store} = createTestStore();
        const component = createComponent(store, {genre: 'comedy'}, true);
        
        expect(fetch.mock.calls[0][0]).toEqual('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=9&search=comedy&searchBy=genres&sortBy=vote_average'); 
    });

    it('fetches movies when genre is changed', () => {
        fetch.mockResponse(JSON.stringify({ data: [] }));
        const {store} = createTestStore();
        const component = createComponent(store, {genre: 'comedy'}, true);

        const props = component.props();
        component.setProps({...props, children: {...props.children, props: {genre: 'action'}}});

        expect(fetch.mock.calls[1][0]).toEqual('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=9&search=action&searchBy=genres&sortBy=vote_average');
    });

    function createComponent(store, props = {}, doMount = false) {
        const renderer = doMount ? mount : shallow;
        const component = renderer(
            <Provider store={store}>
                <GenreMovieList {...props} />
            </Provider>,
        );

        return component;
    }
});

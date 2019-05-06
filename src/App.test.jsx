import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
    beforeEach(() => {
        fetch.resetMocks();
        fetch.once(JSON.stringify({ data: [{ genres: ['action'], id: 1 }] }));
    });

    it('shows 404 view for invalid path', () => {
        const { store } = createTestStore();
        const component = createComponent(store, '/invalid-path');
        expect(component.html()).toMatchSnapshot();
    });

    it('shows no results view for / path', () => {
        const { store } = createTestStore();
        const component = createComponent(store, '/', true);
        expect(component.html()).toMatchSnapshot();
    });

    it('shows filtered movie list for /search/:query path', () => {
        const movies = [{ genres: ['action'], id: 1 }];
        const { store } = createTestStore({ movies });
        const component = createComponent(store, '/search/green', true);
        expect(component.html()).toMatchSnapshot();
    });

    it('shows movie page for /film/:id path', () => {
        const movies = [{ genres: ['action'], id: 1 }];
        const movie = {
            genres: ['action'],
            title: 'action movie',
            id: 1,
        };

        fetch.once(JSON.stringify(movie));
        fetch.once(JSON.stringify({ data: movies }));

        const { store } = createTestStore({ movie, movies });
        const component = createComponent(store, '/film/1', true);

        expect(component.html()).toMatchSnapshot();
    });

    function createComponent(store, path, doMount = false) {
        const renderer = doMount ? mount : shallow;
        const component = renderer(
            <Provider store={store}>
                <MemoryRouter initialEntries={[path]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        return component;
    }
});

import React from 'react';
import { shallow } from 'enzyme';
import MoviePage from './MoviePage';
import { Provider } from 'react-redux';

describe('MoviePage component', () => {
    beforeEach(() => {
        fetch.resetMocks();
        fetch.mockResponse(JSON.stringify({ data: [] }));
    });

    it('has persistent snapshot with movie={{genres: []}}', () => {
        const { store } = createTestStore();
        const component = createComponent(store);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with movie={{genres: ["action"]}}', () => {
        const { store } = createTestStore({
            movie: { genres: ['action'] },
        });
        const component = createComponent(store);
        expect(component.html()).toMatchSnapshot();
    });

    function createComponent(store) {
        const component = shallow(
            <Provider store={store}>
                <MoviePage />
            </Provider>
        );

        return component;
    }
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import { FilteredMovieList } from './FilteredMovieList';
import { MemoryRouter } from 'react-router-dom';

describe('FilteredMovieList component', () => {
    it('has persistent default snapshot', () => {
        const component = createComponent(getProps(), undefined, false);

        expect(component.parent().html()).toMatchSnapshot();
    });

    it('updates query when onQueryChange() is called', () => {
        const props = getProps();
        const component = createComponent(props);

        component.instance().onQueryChange({ target: { value: 'new query' } });

        expect(props.changeQuery).toHaveBeenCalledTimes(1);
        expect(props.changeQuery).toHaveBeenCalledWith('new query');
    });

    it('updates searchBy when onSearchByChange() is called', () => {
        const props = getProps();
        const component = createComponent(props);

        component.instance().onSearchByChange({
            preventDefault: () => {},
            target: { tagName: 'BUTTON', getAttribute: () => 'genres' },
        });

        expect(props.changeSearchBy).toHaveBeenCalledTimes(1);
        expect(props.changeSearchBy).toHaveBeenCalledWith('genres');
    });

    it('updates searchBy when onSearchByChange() is called (span click)', () => {
        const props = getProps();
        const component = createComponent(props);

        component.instance().onSearchByChange({
            preventDefault: () => {},
            target: {
                tagName: 'SPAN',
                parentNode: { getAttribute: () => 'genres' },
            },
        });

        expect(props.changeSearchBy).toHaveBeenCalledTimes(1);
        expect(props.changeSearchBy).toHaveBeenCalledWith('genres');
    });

    it('updates sortBy and gets movies when onSortByChange() is called', () => {
        const props = getProps();
        const component = createComponent(props);
        props.getMovies.mock.calls = [];

        component.instance().onSortByChange({
            preventDefault: () => {},
            target: { tagName: 'BUTTON', getAttribute: () => 'rating' },
        });

        expect(props.changeSortBy).toHaveBeenCalledTimes(1);
        expect(props.changeSortBy).toHaveBeenCalledWith('rating');

        expect(props.history.push).toHaveBeenCalledTimes(1);
        expect(props.history.push).toHaveBeenCalledWith(
            '/search/green/title/rating'
        );
    });

    it('fetches movies when onSubmit() is called', () => {
        const props = getProps();
        const component = createComponent(props);
        props.getMovies.mock.calls = [];

        component.instance().onSubmit({
            preventDefault: () => {},
        });

        expect(props.history.push).toHaveBeenCalledTimes(1);
        expect(props.history.push).toHaveBeenCalledWith(
            '/search/green/title/release_date'
        );
    });

    function createComponent(props, path = '/search/green', doMount = true) {
        const renderer = doMount ? mount : shallow;
        const wrapper = renderer(
            <MemoryRouter initialEntries={[path]}>
                <FilteredMovieList {...props} />
            </MemoryRouter>
        );

        return wrapper.find('FilteredMovieList');
    }

    function getProps() {
        const query = 'green';
        const searchBy = 'title';
        const sortBy = 'release_date';

        return {
            match: {
                params: {
                    query,
                    searchBy,
                    sortBy,
                },
            },
            history: {
                push: jest.fn(),
            },
            movies: [
                { genres: ['drama'], title: 'Green mile', id: 1 },
                { genres: ['comedy'], title: 'Forest Gump', id: 2 },
            ],
            query,
            searchBy,
            sortBy,
            getMovies: jest.fn(),
            changeQuery: jest.fn(),
            changeSortBy: jest.fn(),
            changeSearchBy: jest.fn(),
        };
    }
});

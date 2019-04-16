import React from 'react';
import {shallow} from 'enzyme';
import {FilteredMovieList} from './FilteredMovieList';

describe('FilteredMovieList component', () => {
    it('has persistent default snapshot', () => {
        const component = shallow(<FilteredMovieList {...getProps()} />);
        expect(component.html()).toMatchSnapshot();
    });

    it('updates query when onQueryChange() is called', () => {
        const props = getProps();
        const component = shallow(<FilteredMovieList {...props} />);

        component.instance().onQueryChange({target: {value:'new query'}});

        expect(props.changeQuery).toHaveBeenCalledTimes(1);
        expect(props.changeQuery).toHaveBeenCalledWith('new query');
    });

    it('updates searchBy when onSearchByChange() is called', () => {
        const props = getProps();
        const component = shallow(<FilteredMovieList {...props} />);
        
        component.instance().onSearchByChange({
            preventDefault: () => {}, 
            target: {tagName: 'BUTTON', getAttribute: () => 'genres'},
        });

        expect(props.changeSearchBy).toHaveBeenCalledTimes(1);
        expect(props.changeSearchBy).toHaveBeenCalledWith('genres');
    });

    it('updates searchBy when onSearchByChange() is called (span click)', () => {
        const props = getProps();
        const component = shallow(<FilteredMovieList {...props} />);
        
        component.instance().onSearchByChange({
            preventDefault: () => {}, 
            target: {
                tagName: 'SPAN', 
                parentNode: {getAttribute: () => 'genres'},
            },
        });

        expect(props.changeSearchBy).toHaveBeenCalledTimes(1);
        expect(props.changeSearchBy).toHaveBeenCalledWith('genres');
    });

    it('updates sortBy and gets movies when onSortByChange() is called', () => {
        const props = getProps();
        const component = shallow(<FilteredMovieList {...props} />);
        props.getMovies.mock.calls = [];

        component.instance().onSortByChange({
            preventDefault: () => {}, 
            target: {tagName: 'BUTTON', getAttribute: () => 'rating'},
        });

        expect(props.changeSortBy).toHaveBeenCalledTimes(1);
        expect(props.changeSortBy).toHaveBeenCalledWith('rating');

        expect(props.getMovies).toHaveBeenCalledTimes(1);
        expect(props.getMovies).toHaveBeenCalledWith({
            limit: 50,
            query: '',
            sortBy: 'rating',
            searchBy: 'title',
        });
    });

    it('fetches movies when onSubmit() is called', () => {
        const props = getProps();
        const component = shallow(<FilteredMovieList {...props} />);
        props.getMovies.mock.calls = [];
         
        component.instance().onSubmit({
            preventDefault: () => {},
        });

        expect(props.getMovies).toHaveBeenCalledTimes(1);
        expect(props.getMovies).toHaveBeenCalledWith({
            limit: 50,
            query: '',
            sortBy: 'release_date',
            searchBy: 'title',
        });
    });

    function getProps(movies = []) {
        return {
            movies,
            query: '',
            searchBy: 'title',
            sortBy: 'release_date',
            getMovies: jest.fn(),
            changeQuery: jest.fn(),
            changeSortBy: jest.fn(),
            changeSearchBy: jest.fn(),
        };
    }
});

import React from 'react';
import {shallow} from 'enzyme';
import FilteredMovieList from './FilteredMovieList';

describe('FilteredMovieList component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('has persistent default snapshot', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [] }));
        const component = shallow(<FilteredMovieList />);
        expect(component).toMatchSnapshot();
    });

    it('updates state.query when onQueryChange() is called', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [] }));
        const component = shallow(<FilteredMovieList />);

        expect(component.state('query')).toBe('');
        
        component.instance().onQueryChange({target: {value:'new query'}});

        expect(component.state('query')).toBe('new query');
    });

    it('updates state.searchBy when onSearchByChange() is called', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [] }));
        const component = shallow(<FilteredMovieList />);

        expect(component.state('searchBy')).toBe('title');
        
        component.instance().onSearchByChange({
            preventDefault: () => {}, 
            target: {tagName: 'BUTTON', getAttribute: () => 'genres'},
        });

        expect(component.state('searchBy')).toBe('genres');
    });

    it('updates state.searchBy when onSearchByChange() is called (span click)', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [] }));
        const component = shallow(<FilteredMovieList />);

        expect(component.state('searchBy')).toBe('title');
        
        component.instance().onSearchByChange({
            preventDefault: () => {}, 
            target: {
                tagName: 'SPAN', 
                parentNode: {getAttribute: () => 'genres'},
            },
        });

        expect(component.state('searchBy')).toBe('genres');
    });

    it('updates state.sortBy and fetches moview when onSortByChange() is called', () => {
        fetch.mockResponse(JSON.stringify({ data: [] }));
        const component = shallow(<FilteredMovieList />);

        expect(component.state('sortBy')).toBe('release_date');
        
        component.instance().onSortByChange({
            preventDefault: () => {}, 
            target: {tagName: 'BUTTON', getAttribute: () => 'rating'},
        });

        expect(component.state('sortBy')).toBe('rating');
        expect(fetch.mock.calls[1][0]).toEqual('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=50&search=&searchBy=title&sortBy=rating');
    });

    it('fetches movies when onSubmit() is called', () => {
        fetch.mockResponse(JSON.stringify({ data: [] }));
        const component = shallow(<FilteredMovieList />);
         
        component.instance().onSubmit({
            preventDefault: () => {},
        });

        expect(fetch.mock.calls[1][0]).toEqual('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=50&search=&searchBy=title&sortBy=release_date');
    });
});

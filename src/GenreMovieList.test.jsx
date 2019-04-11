import React from 'react';
import {shallow} from 'enzyme';
import GenreMovieList from './GenreMovieList';

describe('GenreMovieList component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('has persistent default snapshot', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [] }));
        const component = shallow(<GenreMovieList />);
        expect(component.html()).toMatchSnapshot();
    });

    it('fetches movies when genre is changed', () => {
        fetch.mockResponse(JSON.stringify({ data: [] }));
        const component = shallow(<GenreMovieList />);
         
        component.setProps({genre: 'action'});

        expect(fetch.mock.calls[1][0]).toEqual('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=6&sortBy=vote_average&searchBy=genres&search=action');
    });
});

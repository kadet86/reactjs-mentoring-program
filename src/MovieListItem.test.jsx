import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import MovieListItem from './MovieListItem';

describe('MovieListItem component', () => {
    it('has persistent snapshot', () => {
        const movie = {
            id: 1,
            release_date: '2018-02-03',
            genres: ['action', 'comedy'],
        };

        const component = shallow(
            <MemoryRouter>
                <MovieListItem movie={movie} />
            </MemoryRouter>
        );

        expect(component.html()).toMatchSnapshot();
    });
});

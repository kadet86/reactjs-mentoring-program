import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import MovieList from './MovieList';

describe('MovieList component', () => {
    it('has persistent snapshot with movies={[]}', () => {
        const component = shallow(<MovieList movies={[]} />);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with movies={[{id: 1}, {id: 2}, {id: 3}]}', () => {
        const component = shallow(
            <MemoryRouter>
                <MovieList movies={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </MemoryRouter>
        );
        expect(component.html()).toMatchSnapshot();
    });
});

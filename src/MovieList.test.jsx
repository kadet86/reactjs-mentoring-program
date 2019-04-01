import React from 'react';
// import jest from 'jest';
import {shallow} from 'enzyme';
import MovieList from './MovieList';

describe('MovieList component', () => {
    it('has persistent snapshot with movies={[]}', () => {
        const component = shallow(<MovieList movies={[]}/>);
        expect(component).toMatchSnapshot();
    });

    it('has persistent snapshot with movies={[{id: 1}, {id: 2}, {id: 3}]}', () => {
        const component = shallow(<MovieList movies={[{id: 1}, {id: 2}, {id: 3}]}/>);
        expect(component).toMatchSnapshot();
    });

});

import React from 'react';
import {shallow} from 'enzyme';
import MoviePage from './MoviePage';

describe('MoviePage component', () => {
    it('has persistent snapshot with movie={{genres: []}}', () => {
        const component = shallow(<MoviePage movie={{genres: []}}/>);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with movie={{genres: ["action"]}}', () => {
        const component = shallow(<MoviePage movie={{genres: ["action"]}}/>);
        expect(component.html()).toMatchSnapshot();
    });
});

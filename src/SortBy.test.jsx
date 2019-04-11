import React from 'react';
import {shallow} from 'enzyme';
import SortBy from './SortBy';

describe('SortBy component', () => {
    it('has persistent default snapshot', () => {
        const component = shallow(<SortBy />);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with sortBy="release_date"', () => {
        const component = shallow(<SortBy sortBy="release_date"/>);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with sortBy="vote_average"', () => {
        const component = shallow(<SortBy sortBy="vote_average"/>);
        expect(component.html()).toMatchSnapshot();
    });
});

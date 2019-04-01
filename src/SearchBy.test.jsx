import React from 'react';
import {shallow} from 'enzyme';
import SearchBy from './SearchBy';

describe('SearchBy component', () => {
    it('has persistent default snapshot', () => {
        const component = shallow(<SearchBy />);
        expect(component).toMatchSnapshot();
    });

    it('has persistent snapshot with searchBy="title"', () => {
        const component = shallow(<SearchBy searchBy="title"/>);
        expect(component).toMatchSnapshot();
    });

    it('has persistent snapshot with searchBy="genres"', () => {
        const component = shallow(<SearchBy searchBy="genres"/>);
        expect(component).toMatchSnapshot();
    });
});

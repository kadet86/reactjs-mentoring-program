import React from 'react';
import {shallow} from 'enzyme';
import SearchResultsInfo from './SearchResultsInfo';

describe('SearchResultsInfo component', () => {
    it('has persistent snapshot', () => {
        const component = shallow(<SearchResultsInfo />);
        expect(component).toMatchSnapshot();
    });
});

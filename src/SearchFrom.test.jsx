import React from 'react';
import {shallow} from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
    it('has persistent default snapshot', () => {
        const component = shallow(<SearchForm query="" onQueryChange={jest.fn()} />);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with query="green"', () => {
        const component = shallow(<SearchForm query="green" onQueryChange={jest.fn()} />);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with searchBy="genres"', () => {
        const component = shallow(<SearchForm searchBy="genres" onQueryChange={jest.fn()} />);
        expect(component.html()).toMatchSnapshot();
    });
});

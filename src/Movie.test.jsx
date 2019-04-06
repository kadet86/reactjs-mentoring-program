import React from 'react';
import {shallow} from 'enzyme';
import Movie from './Movie';

describe('Movie component', () => {
    it('has persistent snapshot with movie={{}}', () => {
        const component = shallow(<Movie movie={{}}/>);
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot with movie={{release_date:"2018-02-03"}}', () => {
        const component = shallow(<Movie movie={{release_date:"2018-02-03"}}/>);
        expect(component.html()).toMatchSnapshot();
    });
});

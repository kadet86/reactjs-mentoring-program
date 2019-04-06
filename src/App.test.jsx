import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('App component', () => {
    it('has persistent default snapshot', () => {
        const component = shallow(
            <App />,
        );
    
        expect(component.html()).toMatchSnapshot();
    });

    it('has proper default state', () => {
        const component = shallow(
            <App />,
        );
    
        expect(component.state()).toEqual({movie: null});
    });

    it('has persistent snapshot after .navigateMovie() call', () => {
        const component = shallow(
            <App />,
        );

        component.instance().navigateToMovie({genres:[]});
    
        expect(component.html()).toMatchSnapshot();
    });

    it('has persistent snapshot after .navigateToSearch() call', () => {
        const component = shallow(
            <App />,
        );

        component.instance().navigateToSearch();
    
        expect(component.html()).toMatchSnapshot();
    });
});


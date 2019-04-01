import React from 'react';
import {shallow} from 'enzyme';
import MovieListItem from './MovieListItem';

describe('MovieListItem component', () => {
    it('has persistent snapshot with movie={{}}', () => {
        const component = shallow(<MovieListItem movie={{}}/>);
        expect(component).toMatchSnapshot();
    });

    it('has persistent snapshot with movie={{release_date:"2018-02-03"}}', () => {
        const component = shallow(<MovieListItem movie={{release_date:"2018-02-03"}}/>);
        expect(component).toMatchSnapshot();
    });

    it('has persistent snapshot with movie={{genres:["action", "comedy"]}}', () => {
        const component = shallow(<MovieListItem movie={{genres:["action", "comedy"]}}/>);
        expect(component).toMatchSnapshot();
    });

    it('calls navigateToMovie() callback when link is clicked', () => {
        const navigateToMovie = jest.fn();
        const movie = {genres:["action", "comedy"]};

        const component = shallow(<MovieListItem movie={movie} navigateToMovie={navigateToMovie}/>);
        component.find('a').simulate('click');

        expect(navigateToMovie).toHaveBeenCalledTimes(1);
        expect(navigateToMovie).toHaveBeenCalledWith(movie);
    });
});

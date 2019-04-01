import React from 'react';
import {shallow} from 'enzyme';
import TopSection from './TopSection';

describe('TopSection component', () => {
    it('has persistent snapshot', () => {
        const component = shallow((
            <TopSection>
                <div id="1"></div>
                <div id="2"></div>
            </TopSection>
            )
        );
        expect(component).toMatchSnapshot();
    });
});
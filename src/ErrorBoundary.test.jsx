import React from 'react';
import {shallow, mount} from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary component', () => {
    it('has persistent regular snapshot', () => {
        const component = shallow((
            <ErrorBoundary>
                <div id="1"></div>
                <div id="2"></div>
            </ErrorBoundary>
            )
        );
        expect(component).toMatchSnapshot();
    });

    it('has persistent error snapshot', () => {
        const TestError = () => {throw 'error';};
        console.error = jest.fn();
        const component = mount((
            <ErrorBoundary>
                <TestError />
            </ErrorBoundary>
            )
        );

        expect(console.error).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
    });
});
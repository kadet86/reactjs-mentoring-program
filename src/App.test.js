import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('App snapshot is persistent', () => {
    const component = renderer.create(
        <App />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

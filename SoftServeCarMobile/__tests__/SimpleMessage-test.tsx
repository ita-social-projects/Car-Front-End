import React from 'react';
import renderer from 'react-test-renderer';
import SimpleMessage from '../src/activity/chat/SimpleMessage'

test('renders correctly', () => {
    renderer.create(<SimpleMessage />);
});
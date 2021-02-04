import React from 'react';
import renderer from 'react-test-renderer';
import Chat from '../src/activity/chat/Chat'

test('renders correctly', async () => {
    renderer.create(<Chat />);
});
import React from 'react';
import renderer from 'react-test-renderer';
import MessageList from '../src/activity/chat/MessagesList'

test('renders correctly', () => {
    renderer.create(<MessageList />);
});

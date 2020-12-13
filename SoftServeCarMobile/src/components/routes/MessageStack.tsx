import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Chat from '../Chat/Chat';
import Home from '../Chat/Home';

const screens = {
    Chat: {
        screen: Chat
    },
    Home: {
        screen: Home
    }
}

const MessageStack = createStackNavigator(screens);

export default createAppContainer(MessageStack);
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import EStyleSheet from "react-native-extended-stylesheet";

AppRegistry.registerComponent(appName, () => App);
EStyleSheet.build();

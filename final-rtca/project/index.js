import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from '@app/Init';

AppRegistry.registerComponent(appName, () => App);
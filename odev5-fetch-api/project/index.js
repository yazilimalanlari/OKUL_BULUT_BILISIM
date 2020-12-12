/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from '@app/ComponentInit';

AppRegistry.registerComponent(appName, () => App);
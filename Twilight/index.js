/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent("twilight", () => App);
export default function App() {
    return (
      <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
    );
  }



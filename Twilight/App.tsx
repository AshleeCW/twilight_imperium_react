/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {TitleScreen} from "./screens/TitleScreen";
import {CreateMenu} from "./screens/create/CreateMenu";


declare const global: {HermesInternal: null | {}};

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/*<Text>Home Screen</Text>*/}
      <Text>Title Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        {/*<Stack.Screen name="BaseScreen" component={BaseScreen} />*/}
        <Stack.Screen name="TitleScreen" component={TitleScreen} />
        <Stack.Screen name="CreateMenu" component={CreateMenu} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import HomeScreen from './Source/Screens/HomeScreen';
import Dashboard from './Source/Screens/Dashboard';
import { Store } from './Source/Redux/Store/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Init from './screens/init';
import Home from './screens/home';
import Code from './screens/code';
import UserPanel from './screens/userPanel';
import Map from './components/map';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Init" screenOptions={{headerShown: false, gestureEnabled: false}}>
                <Stack.Screen name="Init" component={Init}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Code" component={Code}/>
                <Stack.Screen name="UserPanel" component={UserPanel}/>
                <Stack.Screen name="Map" component={Map}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


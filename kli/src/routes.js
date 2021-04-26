import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import CodeLink from './screens/codeLink';

import getRealm from '../src/services/realm';

const Stack = createStackNavigator();


export default function Routes() {

    const [code, setCode] = useState(null);

    useEffect(() => {
        verifyDb();
    }, []);

    const verifyDb = async () => {
        const realm = await getRealm();
        const data = await realm.objectForPrimaryKey("Repository", 1);
        setCode(data);
    }

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {code
                    ?<Stack.Screen  name="Home" component={Home}/>
                    :<Stack.Screen  name="CodeLink" component={CodeLink}/>
                }
                <Stack.Screen  name="home" component={Home}/>
                <Stack.Screen  name="codeLink" component={CodeLink}/>                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
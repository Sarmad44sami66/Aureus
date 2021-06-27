import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Screens
import LandingScreen from './LandingScreen'
import MoodDetail from './MoodDetail'
import AddRecord from './AddRecord';
import AddWhySo from './AddWhySo';

/** Auth Stack of the app */
export default AuthStack = () => (
    <Stack.Navigator headerMode="none" initialRouteName='LoginScreen'>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="MoodDetail" component={MoodDetail} />
        <Stack.Screen name="AddRecord" component={AddRecord} />
        <Stack.Screen name="AddWhySo" component={AddWhySo} />
    </Stack.Navigator>
);
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Screens
import HomeScreen from './HomeScreen'

//Utils
import colors from '../../utils/colors';

//Components
import DrawerComponent from '../../components/DrawerComponent';

/** Home Drawer */
const HomeDrawerStack = (props) => (
    <Drawer.Navigator
        drawerStyle={{ backgroundColor: colors.background }}
        headerMode="none"
        initialRouteName='HomeScreen'
        drawerContent={(props) => <DrawerComponent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
);

/** Home Stack */
export default HomeStack = () => (
    <Stack.Navigator
        headerMode="none"
        initialRouteName='HomeDrawerStack'>
        <Stack.Screen name="HomeDrawerStack" component={HomeDrawerStack} />
    </Stack.Navigator>
);
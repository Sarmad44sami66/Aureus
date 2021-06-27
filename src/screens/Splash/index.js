import React, { useEffect } from "react";
import { View, Image,Text } from "react-native";
import { styles } from './Styles';
import { CommonActions } from '@react-navigation/native';
import Preference from "react-native-preference";
import { SafeAreaView } from 'react-native-safe-area-context'
//assets
import Images from './../../assets/images/'
//utils
import preferenceKeys from '../../utils/preferenceKeys'

const Splash = ({ navigation }) => {
    let nextRouteName = 'AuthStack'
    const hassSession = Preference.get(preferenceKeys.HAS_SESSION)
    console.log('hassSession', hassSession)
    if (hassSession) nextRouteName = 'HomeStack'
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.reset({ index: 0, routes: [{ name: nextRouteName }] });
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        // <SafeAreaView  style={styles.container}>
        <View style={styles.container}>
            <Text>Splash Screen</Text>
        </View>
        // </SafeAreaView>
    );
};
export default Splash;

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar
} from 'react-native';

import _ from 'lodash'

export default Header = (props) => {

    return (
        <SafeAreaView>
            <View style={[styles.container, props.containerStyle]} >
                <View style={[styles.centerComponentStyle, props.centerComponentExtraStyle]}>
                    {props.centerComponent}
                    {props.hearderText &&
                        <View>
                            <Text style={[styles.hearderText, props.hearderTextStyle]}>
                                {props.hearderText}
                            </Text>
                        </View>
                    }
                </View>
                <TouchableOpacity
                    disabled={_.isNil(props.onLeftAction)}
                    onPress={() => {
                        if (props.onLeftAction && typeof props.onLeftAction) {
                            props.onLeftAction()
                        }
                    }}
                    style={[styles.buttonLeftContainer, props.leftButtonContainerStyle]}>
                    {props.leftIconChildren ?
                        props.leftIconChildren
                        :
                        props.leftIcon &&
                        <Image
                            style={[styles.buttonIcon, props.leftButtonIconStyle]}
                            source={props.leftIcon}
                        />
                    }
                    {props.leftText &&
                        <Text style={[styles.buttonText, props.leftButtonTextStyle]}>
                            {props.leftText}
                        </Text>
                    }
                </TouchableOpacity>

            </ View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: '#00000000',
        // alignItems: 'center',
        // marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    },
    buttonLeftContainer: {
        width: 70,
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
        flexDirection: 'row',
    },
    buttonRightContainer: {
        width: 120,
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 15,
        flexDirection: 'row',
    },
    centerComponentStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        // backgroundColor:'red',
        position: 'absolute',
        right: 0,
    },
    buttonIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    buttonText: {

    },
    hearderText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    hearderDate: {
        color: 'black',
        fontSize: 13
    }
})

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import colors from './../utils/colors'
const Button = (props) => {
    return (
        <TouchableOpacity  onPress={props.clickAction} style={[style.mainContainer, props.backgroundColorStyle]} >
                <Image style={props.imageStyle} resizeMode={'contain'} source={props.img} />
                <Text style={[style.txt, props.textStyle]}>{props.text}</Text>
                <Image style={props.imageStyleRight} resizeMode={'contain'} source={props.imgRight} />
        </TouchableOpacity>
    )
}
export default Button
const style = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        height: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection:'row',
        backgroundColor: colors.brightSun,
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 14,
    },
    txt: {
        color: colors.darkGrey,
        fontSize: 14,
        fontWeight: '600',
    }
});





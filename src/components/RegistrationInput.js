import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image,Platform } from 'react-native'
import colors from '../utils/colors';
import font from './../assets/fonts/'
import icons from './../assets/icons/'
var isFocus = false
// {backgroundColor:isFocus==='af' ? '#FFF8E8' : '#EDEDED' }
const InputBox = (props) => {
    const [focusColr, setFocusColor] = useState(false);
    return (
        <View style={[style.mainContainer, { borderBottomColor: focusColr === false ? '#9CB3BF' : colors.primary ,borderBottomWidth:focusColr === false ? .4:1}, props.customStyle]}>
            {props.isShowTitle === true ?
                null :
                <Text style={style.titleStyle}>{props.title}</Text>
            }
            <View style={[{ width: '100%', height: 38,marginLeft:Platform.OS==='ios' ?4:0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, props.inputCont]}>
                <TextInput
                    editable={props.editable}
                    autoCapitalize={props.autoCapitalizes}
                    inputAccessoryViewID={props.inputAccessoryViewID}
                    placeholderTextColor={props.placeholderColor?colors.green:colors.grayText}
                    maxLength={props.maxLength}
                    placeholder={props.txtPlacHolder}
                    keyboardType={props.tholder}
                    style={[style.inputField, props.customInputStyle]}
                    onFocus={() => {
                        isFocus = true
                        setFocusColor(true)
                        if (typeof props.onFocus == 'function') {
                            props.onFocus()
                        }
                    }}
                    onBlur={(event: Event) => {
                        setFocusColor(false)
                    }}
                    onChangeText={(text) => {
                        if (typeof props.onChangeText == 'function') {
                            props.onChangeText(text)
                        }
                    }}
                    value={props.val}
                    multiline={props.multiline}
                    secureTextEntry={props.secureType}
                />
                {props.isRight === true &&
                    <TouchableOpacity style={{ alignSelf: 'flex-end', width: '8%', alignItems: 'flex-end', marginBottom: 5 }} onPress={props.clickAction} >
                        <Image
                            source={props.secureType === true ? icons.passwordCheckIcon : icons.hideEye}
                            style={props.secureType === true ? style.rightShow : style.rightHide}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}
export default InputBox
const style = StyleSheet.create({
    mainContainer: {
        marginTop: 15,
        height: 60,
        backgroundColor: colors.background,
        // backgroundColor:'red',
        justifyContent: 'center',
        borderRadius: 5,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1
    },
    titleStyle: {
        fontSize: 12,
        fontFamily: font.Regular,
        color: colors.grayText,
        marginTop: 8,
        marginLeft: 3
    },
    inputField: {
        fontWeight: '600',
        // height: 25,
        width: '88%',
        marginEnd: 10,
        fontSize: 14,
        color: 'white',
        // backgroundColor:'green',
        // color: colors.primary,
        fontFamily: font.SemiBold,
    },
    rightShow: {
        width: 30,
        height: 25,
        resizeMode: 'contain'
    },
    rightHide: {
        width: 25,
        height: 22,
        resizeMode: 'contain',
    }
});





import React from 'react';
import { StyleSheet, View, ActivityIndicator,Text } from 'react-native';

import colors from "../utils/colors";

export default Loader = (props) => {
    const { loading,containerStyle,isShowIndicator} = props

    if (loading)
        return (
            <View style={[styles.container, containerStyle]}>
                {/* {loading && */}
                {isShowIndicator &&
                    <ActivityIndicator
                        animating={loading}
                        animating={isShowIndicator}
                        size={'large'}
                        color={colors.brightSun}
                        style={{marginLeft: 5}}
                    />
                }
            </View>
        )
    else return null
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:colors.transpartDart ,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

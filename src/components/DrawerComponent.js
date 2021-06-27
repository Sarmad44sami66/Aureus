import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    StyleSheet,
    ScrollView
} from 'react-native';
import Preference from 'react-native-preference'

//Utils
import colors from '../utils/colors';
import preferenceKeys from '../utils/preferenceKeys';

//Components
import DrawerItem from './DrawerItem';

export default class CompanyDrawerContent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        const { navigation } = this.props
        return (
            <ScrollView
                bounces={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.drawerContainer}>
                    <DrawerItem
                        title={'Item 1'}
                        containerStyle={{ marginTop: 30 }}
                        onPress={() => {
                            
                        }}
                    />
                    <DrawerItem
                        title={'Item 2'}
                        onPress={() => {
                            
                        }}
                    />
                    <View style={{ flex: 1 }} />
                    <DrawerItem
                        loading={loadingOnLogout}
                        containerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
                        titleStyle={{ color: colors.red }}
                        title={'Logout'}
                        onPress={() => {
                            
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: colors.background,
        paddingVertical: 70,
        alignItems: 'center',
        paddingHorizontal: 20
    },
})
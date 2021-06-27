import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    StatusBar,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { styles } from "./Styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import database from '@react-native-firebase/database';
import { useIsFocused } from '@react-navigation/native';
import Button from './../../../components/Button'
const moodTableRef = database().ref('/moodTable');
import colors from '../../../utils/colors'
import Loader from './../../../components/Loader'
import icons from "../../../assets/icons";
const LandingScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const isFocused = useIsFocused();

    useEffect(() => {
        getMoodItems()
    }, [isFocused])
    const addRecordBtn = () => [

    ]
    const getMoodItems = () => {
        setLoading(true)
        moodTableRef
        .once('value')
        .then(snapshot => {
          setLoading(false)
          var tempArray=[]
          snapshot.forEach(element => {
              tempArray.push({
                id: element.key,
                ...element.val()
              })
          });
          setData(tempArray)
          console.log('User data: ', snapshot.val());
        });
    }
    const addMoodItemStatic = () => {
        moodTableRef.push({
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Work, Hobbies, Sleep 3',
            isTypeGreen: true,
            sliderValue: 1,
            date: '05/04',
            moodTags: [
                'Work',
                'Social',
                'Sleep',
                'Relaxation',
                'Exercise'
            ],
            notes: 'lorem ispum lorem ispum lorem ispum lorem ispum'
        }).then((data) => {
            console.log('data', data)
        }).catch((error) => {
            console.log('error ', error)
        })
    }
    const renderItem = ({ item, index }) => (
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('MoodDetail',{detail:item})
        }}
        style={[styles.mainItemContainer, {
            borderBottomWidth: (index + 1) === data.length ? 1 : 0,
            borderBottomColor: (index + 1) === data.length ? '#EFEFEF' : null
        }]}>
            <View style={styles.leftContainer}>
                <View style={styles.imageLeftContainer}>
                    <Image
                        source={item.isTypeGreen === true ? icons.greenEyeIcon : icons.pinkIcon}
                        style={styles.imageLeftItem}
                    />
                    <Text style={[styles.textStyle, { fontSize: 12, color: '#CAC5B9', marginTop: 5 }]}>{item.date}</Text>
                </View>
                <Text style={styles.textStyle}>{item.title}</Text>
            </View>
            <Image
                source={icons.forwardIcon}
                style={styles.imageForward}
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeStyle}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                translucent={false}
            />
            <View style={styles.mainContainer}>
                <Button
                    text={'Add a Record'}
                    img={icons.plusIcon}
                    imageStyle={{ width: 12, height: 12, marginRight: 10 }}
                    backgroundColorStyle={styles.buttonStyleComponent}
                    clickAction={()=>{navigation.navigate('AddRecord')}}
                />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={() => (
                        (!data.length && loading === false) ?
                            <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold', marginTop: '60%' }}>No Mood found</Text>
                            : null
                    )
                    }
                />
            </View>
            <Loader isShowIndicator={true} loading={loading} />

        </SafeAreaView>
    );
};
export default LandingScreen;

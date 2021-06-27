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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import database from "@react-native-firebase/database";
import Loader from "./../../../components/Loader";
import { useIsFocused } from '@react-navigation/native';
import Svg, { G, Path } from "react-native-svg";

import CircularSlider from "@react-native-circular-slider";

const moodTableRef = database().ref("/moodTable");
import colors from "../../../utils/colors";
import icons from "../../../assets/icons";
import Header from "./../../../components/Header";
import moment from "moment";

const moodTags = [
  { id: 1, title: "Work", selected: false },
  { id: 2, title: "Social", selected: false },
  { id: 3, title: "Relaxation", selected: false },
  { id: 4, title: "Sleep", selected: false },
  { id: 5, title: "Hobbies", selected: false },
  { id: 6, title: "Exercise", selected: false },
  { id: 7, title: "Chores", selected: false },
];

const MoodDetail = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [dataMood, setDataMood] = useState(moodTags);
  const [note, setNote] = useState("");
  const [green, setGreen] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const isFocused = useIsFocused();

  useEffect(() => {
    let date = moment(currentDate).format("DD/MM");
    console.log(date);
    setGreen(props?.route?.params?.isGreen);
  }, [isFocused]);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        let tempArray = [];
        dataMood.map((element, location) => {
          if (index == location) {
            element.selected = !element.selected;
            tempArray.push(element);
          } else {
            tempArray.push(element);
          }
        });
        setDataMood([...tempArray]);
      }}
      style={[
        styles.mainItemContainer,
        { backgroundColor: item.selected ? "#171717" : "#FBF4E3" },
      ]}
    >
      <Text style={styles.textStyle}>{item.title}</Text>
    </TouchableOpacity>
  );
  const addMoodItemStatic = () => {
    let tempArray = [];
    dataMood.map((item, index) => {
      if (item.selected == true) {
        tempArray.push(item.title);
      }
    });
    uploadData(tempArray);
  };
  const uploadData = (data) => {
    if (data.length == 0) {
      alert("Please select a tag!!");
    } else {
      setLoading(true);
      moodTableRef
        .push({
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: `${data[0]}`,
          isTypeGreen: green,
          sliderValue: 1,
          date: moment(currentDate).format("DD/MM"),
          moodTags: data,
          notes: note,
        })
        .then((data) => {
          setLoading(false);
          console.log("data", data);
          navigation.navigate("LandingScreen")
        })
        .catch((error) => {
          setLoading(false);
          console.log("error ", error);
        });
    }
  };

  return (
    <SafeAreaView style={styles.safeStyle}>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        translucent={false}
      />
      <View style={styles.mainContainer}>
        <Image
          style={{
            width: "80%",
            height: 80,
            resizeMode: "contain",
            marginTop: 40,
            marginBottom: 10,
          }}
          source={icons.whySo}
        />
        <Text style={styles.headingStyle}>Select tags:</Text>
        <View>
          <FlatList
            data={dataMood}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={4}
            // ListHeaderComponent={() =>
            //   !data?.moodTags.length ? (
            //     <Text
            //       style={{
            //         fontSize: 16,
            //         textAlign: "center",
            //         fontWeight: "bold",
            //         marginTop: "60%",
            //       }}
            //     >
            //       No Mood found
            //     </Text>
            //   ) : null
            // }
          />
          <Text style={[styles.headingStyle, { marginTop: 20 }]}>Note:</Text>
          <TextInput
            textAlignVertical="top"
            placeholder="Optional"
            value={note}
            onChangeText={(text) => {
              setNote(text);
            }}
            style={{
              width: "100%",
              backgroundColor: "#FBF4E3",
              borderRadius: 12,
              padding: 15,
              height: 80,
            }}
          />
          <TouchableOpacity
            onPress={addMoodItemStatic}
            style={{
              width: "95%",
              height: 50,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#63A6DC",
              marginTop: 35,
            }}
          >
            <Text style={{ fontSize: 17, color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Loader isShowIndicator={true} loading={loading} />
    </SafeAreaView>
  );
};
export default MoodDetail;

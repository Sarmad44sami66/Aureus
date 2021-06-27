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
import Svg, { G, Path } from "react-native-svg";

import CircularSlider from "@react-native-circular-slider";

const moodTableRef = database().ref("/moodTable");
import colors from "../../../utils/colors";
import icons from "../../../assets/icons";
import Header from "./../../../components/Header";

const MoodDetail = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(props?.route?.params?.detail);
  const [angleLength, setAngleLength] = useState(0);
  const [startAngle, setStartAngle] = useState(Math.PI);

  useEffect(() => {
    console.log(props?.route?.params?.detail.isTypeGreen);
    if (props?.route?.params?.detail.isTypeGreen){
        setAngleLength(1.5698078162226672);
    } else {
        setAngleLength(-1.5899523695653859);
    }
  }, []);

  const onUpdate = ({ startAngle, angleLength }) => {
    setAngleLength(angleLength);
    setStartAngle(startAngle);
    setLoading(false);
  };
  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={styles.mainItemContainer}>
      <Text style={styles.textStyle}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeStyle}>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        translucent={false}
      />
      <Header
        containerStyle={{ backgroundColor: colors.white }}
        onLeftAction={() => {
          navigation.goBack();
        }}
        leftIcon={icons.backIcon}
        hearderText={"Mood"}
        leftButtonIconStyle={{ width: 43, height: 43 }}
      />
      <Text style={styles.dateStyle}>{data.date}</Text>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.eyeView}>
            {angleLength == 0 ? (
              <Image style={styles.eyeImage} source={icons.yellowEyeIcon} />
            ) : angleLength > 0 ? (
              <Image style={styles.eyeImage} source={icons.greenEyeIcon} />
            ) : angleLength < -3 ? (
              <Image style={styles.eyeImage} source={icons.greenEyeIcon} />
            ) : (
              <Image style={styles.eyeImage} source={icons.pinkIcon} />
            )}
          </View>
          <CircularSlider
            startAngle={startAngle}
            angleLength={angleLength}
            onUpdate={onUpdate}
            segments={1}
            strokeWidth={20}
            radius={130}
            gradientColorFrom="#171717"
            gradientColorTo="#171717"
            // showClockFace
            // clockFaceColor="#9d9d9d"
            bgCircleColor={data.isTypeGreen ? "#4BA695" : "#F7BBB5"}
          />
        </View>
        <Text style={styles.headingStyle}>Select tags:</Text>
        <View>
          <FlatList
            horizontal
            data={data?.moodTags}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() =>
              !data?.moodTags.length ? (
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "60%",
                  }}
                >
                  No Mood found
                </Text>
              ) : null
            }
          />
        </View>
        {data.notes != undefined && (
          <View>
            <Text style={[styles.headingStyle, { marginTop: 20 }]}>Notes</Text>
            <View style={styles.notesContainer}>
              <Text
                style={[
                  styles.headingStyle,
                  { color: colors.darkGrey, fontSize: 15, marginBottom: 0 },
                ]}
              >
                {data.notes}
              </Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default MoodDetail;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { styles } from "./Styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Svg, { G, Path } from "react-native-svg";

import CircularSlider from "@react-native-circular-slider";

import Icons from "./../../../assets/icons/";
import Images from "../../../assets/images";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [angleLength, setAngleLength] = useState(0);
  const [startAngle, setStartAngle] = useState(Math.PI);

  const WAKE_ICON = (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 33 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M28.8092 10.4727L21.4001 3.01952C20.8157 2.4378 20.8157 1.48525 21.4001 0.896267C21.9772 0.307283 22.9223 0.307283 23.5067 0.896267L31.9691 9.41108C32.2504 9.69467 32.4091 10.0728 32.4091 10.4727C32.4091 10.8726 32.2504 11.2508 31.9763 11.5343L23.4994 20.0637C23.2109 20.3546 22.8285 20.5 22.4462 20.5C22.0638 20.5 21.6814 20.3546 21.3929 20.0637C20.8085 19.4747 20.8085 18.5294 21.3929 17.9404L28.8092 10.4727Z"
        fill="#171717"
      />
      <Path
        d="M4.19087 10.4727L11.6 3.01952C12.1843 2.4378 12.1843 1.48525 11.6 0.896267C11.0228 0.307283 10.0778 0.307283 9.4934 0.896267L1.031 9.41108C0.749641 9.69467 0.590926 10.0728 0.590926 10.4727C0.590926 10.8726 0.749641 11.2508 1.02379 11.5343L9.50062 20.0637C9.78919 20.3546 10.1715 20.5 10.5539 20.5C10.9363 20.5 11.3186 20.3546 11.6072 20.0637C12.1916 19.4747 12.1916 18.5294 11.6072 17.9404L4.19087 10.4727Z"
        fill="#171717"
      />
    </Svg>
  );

  const onUpdate = ({ startAngle, angleLength }) => {
    setAngleLength(angleLength);
    setStartAngle(startAngle);
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.safeStyle}>
      <ImageBackground
        resizeMode={"stretch"}
        style={{
          width: windowWidth,
          height: 250,
          alignItems: "center",
          justifyContent: "center",
        }}
        source={Images.upperBackground}
      >
        <View
          style={{
            width: "60%",
            height: 80,
            backgroundColor: "white",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ width: "70%" }}>
            Hello gorgeous, how are you feeling today?
          </Text>
          <View style={[styles.triangle, styles.arrowUp]} />
        </View>
        <View style={{ position: "absolute", bottom: -10 }}>
          {angleLength == 0 ? (
            <Image
              style={styles.eyeImageJoker}
              source={Icons.blueJokerEyeIcon}
            />
          ) : angleLength > 0 ? (
            <Image
              style={styles.eyeImageJoker}
              source={Icons.blueJokerEyeIcon}
            />
          ) : angleLength < -3 ? (
            <Image
              style={styles.eyeImageJoker}
              source={Icons.blueJokerEyeIcon}
            />
          ) : (
            <Image
              style={styles.eyeImageJoker}
              source={Icons.pinkJokerEyeIcon}
            />
          )}
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.eyeView}>
          {angleLength == 0 ? (
            <Image style={styles.eyeImage} source={Icons.yellowEyeIcon} />
          ) : angleLength > 0 ? (
            <Image style={styles.eyeImage} source={Icons.greenEyeIcon} />
          ) : angleLength < -3 ? (
            <Image style={styles.eyeImage} source={Icons.greenEyeIcon} />
          ) : (
            <Image style={styles.eyeImage} source={Icons.pinkIcon} />
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
          bgCircleColor={
            angleLength == 0
              ? "#63A6DC"
              : angleLength > 0
              ? "#4BA695"
              : angleLength < -3
              ? "#4BA695"
              : "#F7BBB5"
          }
          stopIcon={
            <G scale="1.1" transform={{ translate: "-8, -8" }}>
              {WAKE_ICON}
            </G>
          }
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddWhySo", {
              isGreen: angleLength > 0 ? true : angleLength < -3 ? true : false,
            });
          }}
          disabled={loading}
          style={[
            styles.Btn,
            { backgroundColor: angleLength == 0 ? "#63A6DC40" : "#63A6DC" },
          ]}
        >
          <Text style={styles.BtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

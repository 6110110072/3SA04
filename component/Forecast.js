import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Forecast(props) {
  // let x = "";
  // if (props.name == "Hat Yai") {
  //   x = require("../lena.jpg");
  // }
  // if (props.name == "Trang") {
  //   x = require("../bg.jpg");
  // }

  return (
    // <ImageBackground source={x} style={styles.backdrop}>
    <View>
      {/* <ImageBackground source={x}style={styles.backdrop}></ImageBackground> */}
      <Text style={styles.mainText}>{props.main}</Text>
      <Text style={styles.descriptionText}>{props.description}</Text>
      <Text style={styles.detailText}>
        pressure : {props.pressure} pascal {"    "} Huminity : {props.humidity}{" "}
        %
      </Text>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
        }}
      >
        <Text style={styles.tempText}>Tempurature : {props.temp}°C</Text>
      </View>
      <Text style={styles.feellikeText}>Feel Like : {props.feels_like}°C</Text>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  mainText: {
    fontSize: 30,
    color: "black",
    paddingTop: 25,
    textAlign: "center",
    opacity: 0.75,
  },
  descriptionText: {
    fontSize: 25,
    color: "black",
    paddingTop: 10,
    textAlign: "center",
    opacity: 0.75,
  },
  detailText: {
    fontSize: 13,
    color: "black",
    paddingTop: 15,
    textAlign: "center",
    opacity: 0.75,
  },
  feellikeText: {
    fontSize: 15,
    color: "black",
    paddingTop: 0,
    textAlign: "center",
    opacity: 0.75,
  },
  tempText: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    opacity: 0.75,
  },
  celsiusText: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    opacity: 0.75,
  },
});

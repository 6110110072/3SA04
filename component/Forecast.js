import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
} from "react-native";

export default function Forecast(props) {
  let img = "";
  if (props.name == "Hat Yai") {
    img = require("../image/hatyai.jpg");
  }
  if (props.name == "Trang") {
    img = require("../image/trang.jpg");
  }
  if (props.name == "Chiang Mai") {
    img = require("../image/chiangmai.jpg");
  }
  if (props.name == "Khon Kaen") {
    img = require("../image/khonkaen.jpg");
  }

  if (props.name == "Chaophraya Surasak") {
    img = require("../image/chonburi.jpg");
  }
  if (props.name == "Surat Thani") {
    img = require("../image/SuratThani.jpg");
  }
  if (props.name == "Nakhon Pathom") {
    img = require("../image/NakhonPathom.jpg");
  }
  if (props.name == "Bangkok") {
    img = require("../image/Bangkok.jpg");
  }

  return (
    // <ImageBackground source={x} style={styles.backdrop}>
    <View>
      <Text style={styles.mainText}>{props.name}</Text>
      <View>
        <Image source={img} style={styles.img}></Image>
      </View>
      <Text style={styles.mainText}>{props.main}</Text>
      <Text style={styles.descriptionText}>{props.description}</Text>
      <Text style={styles.detailText}>
        pressure : {props.pressure} pascal {"    "} Huminity : {props.humidity}{" "}
        %
      </Text>
  <Text style={styles.tempText}>{"\n"}Tempurature : {props.temp}°C</Text>
      <Text style={styles.feellikeText}>
        Feel Like : {props.feels_like}°C{"\n"}
      </Text>
      
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    top: 15,
    width: 320,
    height: 150,
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

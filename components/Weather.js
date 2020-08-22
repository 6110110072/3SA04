import React, { useState, useEffect } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import Forecast from "./Forcecast";

export default function Weather(props) {

  const [forecastInfo, setForecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
  });

  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=872d98f3c1a490ee5532740f48968ff6`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp,
          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);

  
  return (
    <ImageBackground
      source={require("../fd7b7c1571071fad190e1d96fcba150a.jpg")}
      style={styles.backdrop}
    >
      <Text style={styles.textsize}>Zip Code</Text>
      <Text style={styles.textsize}>{props.zipCode}</Text>
      <Forecast {...forecastInfo} />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 100,

    width: "100%",
    height: "100%",
  },
  textsize: {
    fontSize: 30,
    
  },
});

import React, { useState, useEffect } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "main",
    description: "description",
    temp: 0,
  });
  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},
        th&units=metric&APPID=872d98f3c1a490ee5532740f48968ff6`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp,
            feels_like: json.main.feels_like,
            pressure: json.main.pressure,
            humidity: json.main.humidity,
            name: json.name,
            speed: json.wind.speed,
            deg: json.wind.deg,
          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);

  
  return (
    <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
      <View style={styles.background}></View>
      <Text style={styles.Text}>Zip code is {props.zipCode}</Text>
      <Forecast {...forecastInfo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  Text: {
    paddingTop: 20,
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  background: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "white",
    position: "absolute",
    opacity: 0.55,
    width: "90%",
    height: "75%",
    
  },
});

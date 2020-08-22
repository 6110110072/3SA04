import React, { useState } from "react";
import { Text, ImageBackground , StyleSheet, View} from "react-native";
import Forecast from "./Forcecast";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
  });
  return (
     
    <ImageBackground source={require("../fd7b7c1571071fad190e1d96fcba150a.jpg")} style={styles.backdrop}>

      <Text style = {styles.textsize}>Zip Code</Text> 
      <Text style = {styles.textsize}>{props.zipCode}</Text>
      <Forecast {...forecastInfo } />
    </ImageBackground>
     
  );
}
const styles = StyleSheet.create({
  backdrop: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    fontSize : 100,
    
    width: "100%",
    height: "100%",
  },
  textsize: {
    fontSize : 30,
  }
});

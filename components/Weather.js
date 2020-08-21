import React, { useState } from "react";
import { Text, ImageBackground , StyleSheet} from "react-native";
import Forecast from "./Forcecast";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
  });
  return (
    // <View>
    <ImageBackground source={require("../fd7b7c1571071fad190e1d96fcba150a.jpg")} style={styles.backdrop}>
      { <Text>Zip Code</Text> }
      { <Text>{props.zipCode}</Text> }
      <Forecast {...forecastInfo} />
    </ImageBackground>
    // </View>
  );
}
const styles = StyleSheet.create({
  backdrop: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

    width: "100%",
    height: "100%",
  },
});

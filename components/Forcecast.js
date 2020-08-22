import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Forecast(props) {
  return (
    <View >
      <Text style = {styles.textsize}>{props.main}</Text>
      <Text style = {styles.textsize}>{props.description}</Text>
      <Text style = {styles.textsize}>{props.temp}</Text>
      <Text style = {styles.textsize}>°C</Text>
    </View>
  )
} 
const styles = StyleSheet.create({
  textsize: {
    fontSize : 30,
    
  }
});
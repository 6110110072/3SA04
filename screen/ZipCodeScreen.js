import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Linking,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
  { place: "Hatyai", code: "90110", pic: require("../image/hatyai.jpg") },
  { place: "Trang", code: "92000", pic: require("../image/trang.jpg") },
  { place: "Chiangmai", code: "50000", pic: require("../image/chiangmai.jpg") },
  { place: "Khonkaen", code: "40000", pic: require("../image/khonkaen.jpg") },
  { place: "Chonburi", code: "20000", pic: require("../image/chonburi.jpg") },

  {
    place: "Surat Thani",
    code: "82000",
    pic: require("../image/SuratThani.jpg"),
  },
  {
    place: "Nakhon Pathom",
    code: "70000",
    pic: require("../image/NakhonPathom.jpg"),
  },
  { place: "Bangkok", code: "10200", pic: require("../image/Bangkok.jpg") },
];

const ZipItem = ({ place, code, navigation, pic }) => (
  <TouchableHighlight
    onPress={() => navigation.navigate("Weather", { zipCode: code })}
  >
    <View style={styles.layout}>
      <ImageBackground source={pic} style={styles.backdrop}></ImageBackground>
      <Text style={{ textAlign: "center", backgroundColor: "#FFE099" }}>
        {place}
      </Text>
      <Text style={{ textAlign: "center", backgroundColor: "#FFEABC" }}>
        {code}
      </Text>
      <Text style={{ backgroundColor: "#FFF6E1" }}>{"\n"}</Text>
    </View>
  </TouchableHighlight>
);
export default function zipCodeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        style={styles.Button}
        title="See all Weather in Website"
        color="black"
        onPress={() => Linking.openURL("https://weather.com/weather/today/l/7.00,100.48?par=google&temp=c")}
      ></Button>

      <FlatList
        data={availableZipItems}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    alignItems: "center",
    width: 415,
    height: 100,
  },
  zipItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  layout: {
    alignItems: "stretch",
  },
  zipPlace: {
    flex: 1,
  },
  zipCode: {
    flex: 1,
  },
  
});

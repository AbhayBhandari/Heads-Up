import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "../../Colors";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default function Timer({ timing }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.timerImage}
        source={require("../../images/timer.png")}
        resizeMode={"contain"}
      >
        <Text style={styles.textStyle}>{timing}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 10,
    position: "absolute",
    top: 2,
    left: 6,
  },
  timerImage: {
    width: width / 4.8,
    height: height / 4.8,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    paddingTop: 10,
    color: Colors.white,
    fontSize: 25,
  },
});

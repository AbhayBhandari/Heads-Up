import {
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import Colors from "../../Colors";

export default function Timer({ timing }) {
  return (
      <ImageBackground
        style={styles.timerImage}
        source={require("../../images/timer.png")}
        resizeMode={"contain"}
      >
        <Text style={styles.textStyle}>{timing}</Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  timerImage: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    paddingTop: 10,
    color: Colors.white,
    fontSize: 25,
  },
});

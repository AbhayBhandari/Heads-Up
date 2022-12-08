import { StyleSheet, Text, Image, Dimensions } from "react-native";
import React from "react";

import Colors from "../../Colors";
import * as Animatable from "react-native-animatable";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default function Start() {
  return (
    <Animatable.View animation="bounceIn" duration={3000}>
      <Image
        style={styles.icon}
        source={require("../../images/rotate-icon.png")}
      />
      <Text style={styles.textStyle}>
        Rotate your phone to landscape mode to start the game.
      </Text>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: width / 1.3,
    height: height / 2,
    resizeMode: "contain",
    alignSelf: "center",
  },
  textStyle: {
    color: Colors.white,
    fontFamily: "serif",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "700",
  },
});

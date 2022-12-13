import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import Colors from "../../Colors";

export default function CircularButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: Colors.buttonColor,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderLeftWidth: 0.6,
    borderRightWidth: 0.6,
    borderColor: Colors.secondary,
    marginTop: 50,
  },
  textStyle: {
    fontFamily: "notoserif",
    color: Colors.white,
    fontSize: 30,
    fontWeight: "bold",
  },
});

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import Colors from "../../Colors";

export default function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 70,
    borderRadius: 20,
    backgroundColor: Colors.buttonColor,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderLeftWidth: 0.6,
    borderRightWidth: 0.6,
    borderColor: Colors.secondary,
  },
  textStyle: {
    fontFamily: "notoserif",
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});

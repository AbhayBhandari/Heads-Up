import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Colors";

export default function Correct() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Correct</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textStyle: {
    fontFamily: "serif",
    color: Colors.white,
    fontSize: 100,
    fontWeight: "600",
  },
});

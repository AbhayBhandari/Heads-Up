import { StyleSheet, View } from "react-native";
import React from "react";

import Colors from "../../Colors";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Start from "../components/Start";
import CountDown from "../components/CountDown";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {useDeviceOrientation().portrait == true ? <Start /> : <CountDown />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

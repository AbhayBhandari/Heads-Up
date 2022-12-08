import { StyleSheet, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import * as Animatable from "react-native-animatable";
import Colors from "../../Colors";
import { useNavigation } from "@react-navigation/native";

export default function CountDown() {
  const navigation = useNavigation();
  const [countdown, setCountdown] = useState(3);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1500);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      navigation.navigate("Word");
    }
  }, [countdown]);
  return (
    <Animatable.View animation="bounceIn" duration={10000}>
      <Text style={styles.countdown}>{countdown}</Text>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  countdown: {
    fontSize: 100,
    color: Colors.white,
  },
});

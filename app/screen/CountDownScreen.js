import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Animatable from "react-native-animatable";

import Colors from "../../Colors";

export default function CountDownScreen() {
  const navigation = useNavigation();
  const [countdown, setCountdown] = useState(3);
  const timerId = useRef();

  const playsound = async (sound) => {
    try {
      backgroundMusic = new Audio.Sound();
      await backgroundMusic.loadAsync(sound);

      await backgroundMusic.playAsync();
    } catch (m) {
      console.log(m);
    }
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      playsound(require("../../sounds/countdown321-sound.wav"));
      setCountdown((prev) => prev - 1);
    }, 1500);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      playsound(require("../../sounds/countdown0-sound.wav"));
      clearInterval(timerId.current);
      navigation.navigate("Word");
    }
    if (countdown == 3) {
      playsound(require("../../sounds/countdown321-sound.wav"));
    }
  }, [countdown]);

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" duration={10000}>
        <StatusBar hidden={true} />
        <Text style={styles.countdown}>{countdown}</Text>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  countdown: {
    fontSize: 100,
    color: Colors.white,
  },
});

import { StyleSheet, Text, ImageBackground } from "react-native";
import React, { useState, useEffect, useRef } from "react";

import Word from "../../Words";
import Colors from "../../Colors";
import Correct from "../components/Correct";
import Pass from "../components/Pass";
import * as ScreenOrientation from "expo-screen-orientation";
import { useNavigation } from "@react-navigation/native";
import { DeviceMotion } from "expo-sensors";
import Timer from "../components/Timer";

export default function WordScreen() {
  const [wordIndex, setWordIndex] = useState(0);
  const [countCorrectWords, setCountCorrectWords] = useState(0);
  const [countPassWords, setCountPassWords] = useState(0);
  const [time, setTime] = useState(120);
  const [gamma, setGamma] = useState(null);

  const [gameState, setGameState] = useState(3);
  // 0->word, 1->correct, 2->pass

  const navigation = useNavigation();

  DeviceMotion.setUpdateInterval(500);
  const timerId = useRef();

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  DeviceMotion.addListener((motion) => {
    let gamma_t = motion.rotation.gamma;
    setGamma(gamma_t);
    if (gamma_t == null) {
      gamma_t = motion.rotation.gamma;
    } else {
      if (
        gameState != 1 &&
        ((gamma_t >= -3 && gamma_t <= -2.4) || (gamma_t >= 2.3 && gamma_t <= 3))
      ) {
        setGameState(1);
      } else if (gameState != 2 && gamma_t >= -0.4 && gamma_t < 0.5) {
        setGameState(2);
      } else if (gameState != 0 && gamma_t > -1.3 && gamma_t < 2.4) {
        setGameState(0);
      }
    }
  });

  useEffect(() => {
    if (gameState == 0) {
      DeviceMotion.removeAllListeners();
    } else if (gameState == 1) {
      setCountCorrectWords(countCorrectWords + 1);
      setWordIndex(wordIndex + 1);
    } else if (gameState == 2) {
      setCountPassWords(countPassWords + 1);
      setWordIndex(wordIndex + 1);
    }
  }, [gameState]);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(timerId.current);
      DeviceMotion.removeAllListeners();
      ScreenOrientation.unlockAsync();
      navigation.navigate("Result", {
        countCorrectWords: countCorrectWords,
        countPassWords: countPassWords,
      });
    }
  }, [time]);

  return (
    <>
      {(gamma > -3 && gamma < -2.4) || (gamma >= 2.3 && gamma <= 3) ? (
        <Correct />
      ) : gamma >= -0.4 && gamma < 0.5 ? (
        <Pass />
      ) : (
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={require("../../images/bg.png")}
        >
          <Timer timing={time} />
          <Text numberOfLines={2} style={styles.textStyle}>
            {Word[wordIndex]}
          </Text>
        </ImageBackground>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "serif",
    color: Colors.white,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "center",
  },
});

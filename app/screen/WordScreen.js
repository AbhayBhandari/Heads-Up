import {
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
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
  const pauseButton = require("../../images/pause-button.png");
  const playButton = require("../../images/play-button.png");
  const [button, setButton] = useState(pauseButton);
  const [isPause, setIsPause] = useState(false);

  const handlePlayPauseButton = () => {
    if (button == pauseButton) {
      setButton(playButton);
      setIsPause(true);
    }
    if (button == playButton) {
      setButton(pauseButton);
      setIsPause(false);
    }
  };

  const [wordIndex, setWordIndex] = useState(0);
  const [countCorrectWords, setCountCorrectWords] = useState(0);
  const [countPassWords, setCountPassWords] = useState(0);
  const [time, setTime] = useState(120);
  const [gamma, setGamma] = useState(100);

  const [gameState, setGameState] = useState(0);
  // 0->word, 1->correct, 2->pass

  const navigation = useNavigation();

  DeviceMotion.setUpdateInterval(400);
  const timerId = useRef();

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  DeviceMotion.addListener((motion) => {
    let gamma_t = motion.rotation.gamma;
    setGamma(gamma_t);
    if (gamma_t == null) {
      gamma_t = motion.rotation.gamma;
    } else {
      if (gameState != 1 && gamma_t >= 2.3 && gamma_t <= 3.2 && !isPause) {
        setGameState(1);
      } else if (
        gameState != 2 &&
        gamma_t <= 0.4 &&
        gamma_t >= -0.1 &&
        !isPause
      ) {
        setGameState(2);
      } else {
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
    if (time <= 0) {
      clearInterval(timerId.current);
      DeviceMotion.removeAllListeners();
      navigation.navigate("Result", {
        countCorrectWords: countCorrectWords,
        countPassWords: countPassWords,
      });
    }
  }, [time]);

  useEffect(() => {
    if (isPause == true) {
      setGameState(0);
      clearInterval(timerId.current);
    }
    if (isPause == false) {
      timerId.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId.current);
    }
  }, [isPause]);

  return (
    <>
      <StatusBar hidden={true} />
      {gamma >= 2.3 && gamma <= 3.2 && !isPause ? (
        <Correct />
      ) : gamma <= 0.4 && gamma >= -0.1 && !isPause ? (
        <Pass />
      ) : (
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={require("../../images/bg.png")}
        >
          <View style={styles.container}>
            <Timer timing={time} />
            <TouchableOpacity onPress={handlePlayPauseButton}>
              <Image
                style={styles.image}
                source={button}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
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
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 20,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
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

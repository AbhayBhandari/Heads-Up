import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  StatusBar,
} from "react-native";
import React from "react";
import Colors from "../../Colors";
import * as ScreenOrientation from "expo-screen-orientation";

export default function ResultScreen({ route }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require("../../images/result-bgg.jpg")}
        resizeMode="cover"
        style={styles.container}
      >
        <Image
          source={require("../../images/result.png")}
          style={styles.resultImage}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../images/correct.png")}
              style={styles.icon}
            />
            <Text style={styles.textStyle}>
              Correct Words: {route.params.countCorrectWords}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../images/pass.png")}
              style={styles.icon}
            />
            <Text style={styles.textStyle}>
              Passed Words: {route.params.countPassWords}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => BackHandler.exitApp()}
        >
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "40%",
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "serif",
    color: Colors.white,
    fontSize: 20,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  icon: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },

  resultImage: {
    resizeMode: "contain",
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 60,
    marginTop: 20,
  },
  textStyle: {
    fontFamily: "serif",
    fontSize: 23,
    color: Colors.primary,
  },
});

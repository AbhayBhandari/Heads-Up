import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Colors from "../../Colors";
import YoutubePlayer from "react-native-youtube-iframe";

const text =
  "1. Press Play button to start the game.\n\n2. Twisting the phone upwards will show 'Pass' and change the word on the screen.\n\n3. Twisting the phone downwards will show 'Correct' and change the word on the screen.\n\n4. After the timer ends the screen will show number of Correct and Passed words.";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../../images/back.png")}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerText}>ABOUT</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <View style={styles.video}>
        <YoutubePlayer height={300} play={false} videoId={"gyVZurXuylc"} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.instructionsText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    width: 35,
    height: 35,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  header: {
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    height: "12%",
    justifyContent: "space-evenly",
  },
  headerText: {
    textAlign: "center",
    fontSize: 30,
    color: Colors.white,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  instructions: {
    backgroundColor: Colors.white,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  instructionsText: {
    fontFamily: "serif",
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  video: {
    marginHorizontal: 20,
    marginTop: 50,
  },
});

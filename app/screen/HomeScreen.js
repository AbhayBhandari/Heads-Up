import { StyleSheet, View, StatusBar, Image, Linking } from "react-native";
import React from "react";
import * as ScreenOrientation from "expo-screen-orientation";

import Colors from "../../Colors";
import MyButton from "../components/MyButton";
import CircularButton from "../components/CircularButton";

export default function HomeScreen({ navigation }) {
  
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        resizeMode="contain"
        source={require("../../assets/icon.png")}
        style={styles.image}
      />
      <MyButton title="PLAY" onPress={()=>navigation.navigate('CountDown')}/>
      <MyButton
        title="MORE GAMES"
        onPress={() => Linking.openURL("http://play.google.com/store")}
      />
      <CircularButton title="?" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    alignItems: "center",
  },
  image: {
    width: "35%",
    height: "35%",
    overflow: "hidden",
    marginTop: 30,
  },
});

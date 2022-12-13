import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screen/HomeScreen";
import WordScreen from "./app/screen/WordScreen";
import ResultScreen from "./app/screen/ResultScreen";
import AboutScreen from "./app/screen/AboutScreen";
import CountDownScreen from "./app/screen/CountDownScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CountDown" component={CountDownScreen} />
        <Stack.Screen name="Word" component={WordScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// MEMO -- expo-font allows loading fonts from the web and use them in RN components
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// MEMO -- react-native-screens provides primitives to represent screens like UI View or Fragment instead of plain <View> to take advantages of OS behavior and optimizations around screens 
import { enableScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      // MEMO -- making sure that all the necessary fonts are loaded, then rerender the App component
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
  },
});

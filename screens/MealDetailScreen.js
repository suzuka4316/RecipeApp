import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
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

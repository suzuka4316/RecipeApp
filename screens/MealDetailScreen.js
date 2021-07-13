import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          //popToTop() pops off all the stack and go back to the default screen, in this app, CategoriesScreen
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

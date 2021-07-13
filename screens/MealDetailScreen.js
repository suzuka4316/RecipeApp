import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { MEALS } from "../data/dummy-data";

export const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Text>{selectedMeal.title}</Text>
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

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

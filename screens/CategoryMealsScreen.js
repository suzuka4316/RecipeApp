import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen</Text>
      <Button
        title="Go to Meal Detail!"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go Back!"
        onPress={() => {
          props.navigation.goBack();
          //pop() only works in stack navigator as the name suggests
          // props.navigation.pop();
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

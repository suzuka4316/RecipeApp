import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          // MEMO -- Every screen specified with react-native receives some props and one of them is called 'navigation'. Check MealsNagivator.js for which screens are chosen to use. Make sure you are specifying the screen identifier you defined, not the name of the screen itself.
          //props.navigation.navigate("CategoryMeals") also works.
          props.navigation.navigate({ routeName: "CategoryMeals" });
          // MEMO -- props.navigation.push("CategoryMeals") also behaves the same way, unless you're pushing onto the same screen the user is. push() is useful when you want to display different content in the same screen (e.g. like OneDrive, it uses the same screen while moving through the folders, with different content)
          // MEMO -- props.navigation.replace("CategoryMeals") also behaves the same way, but it pops off the CategoriesScreen, and the next screen (CategoryMeals) will be the first in the stack. There won't be a Back button. (e.f. Login screen, where the logged in user cannot go back once logged in)
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

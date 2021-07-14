import { Platform } from "react-native";
// MEMO -- createAppContainer is ALWAYS imported from react-navigation, regardless of which react-navigation version you're using
import { createAppContainer } from "react-navigation";
// MEMO -- react-navigation-stack manages stacks of screens and the according animations required under the hood
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from 'react-navigation-drawer';

import Colors from "../constants/Colors";
import {
  CategoriesScreen,
  CategoryMealsScreen,
  FavoritesScreen,
  MealDetailScreen,
} from "../screens";

// MEMO -- createStackNavigater also allows you to set a default config as a second object parameter. This default config will be overridden if any of the property is defined specifically in the first object parameter or in a screen.
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    //this only works in ios, and animation will be slide from bottom
    mode: "modal",
    //initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      // MEMO -- by default, on ios, back button includes the label of the previous screen if it fits in available space, otherwise it says "Back"
      headerBackTitle: "Back",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites: FavoritesScreen,
});

// MEMO -- Stack navigator 'MealsNavigator' is now nested inside the Tab Navigator
/**
 * |- createAppContainer (react-navigation)
 * |  |- MealsFabTabNavigator (react-navigation-tabs)
 * |    |- MealsNavigator (react-navigation-stack)
 */
export default createAppContainer(MealsFavTabNavigator);

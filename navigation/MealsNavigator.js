import React from "react";
import { Platform } from "react-native";
// MEMO -- createAppContainer is ALWAYS imported from react-navigation, regardless of which react-navigation version you're using
import { createAppContainer } from "react-navigation";
// MEMO -- react-navigation-stack manages stacks of screens and the according animations required under the hood
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from 'react-navigation-drawer';
// MEMO -- it makes the tab navigator look more android native
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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

    // MEMO -- you can configure navigationOptions here, but it won't be used the same way as defaultNavigationOptions! You're configuring the nested navigator for the parent navigator (in this case MealsFavTabNavigator).
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            // MEMO -- a parameter passed in tabBarIcon() includes the default setting of the tab navigation. As the color is set to Color.secondary in tabBarOptions, we can access that through tabInfo
            color={tabInfo.tintColor}
          />
        );
      },
      // MEMO -- this does not affect if 'shifting' property is not set to true!
      tabBarColor: Colors.secondary,
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-star"
            size={25}
            // MEMO -- a parameter passed in tabBarIcon() includes the default setting of the tab navigation. As the color is set to Color.secondary in tabBarOptions, we can access that through tabInfo
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.primary,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secondary,
        },
      });

// MEMO -- The stack navigator 'MealsNavigator' is now nested inside the tab navigator 'MealsFabTabNavigator'
/**
 * |- createAppContainer (react-navigation)
 * |  |- MealsFabTabNavigator (react-navigation-tabs)
 * |    |- MealsNavigator (react-navigation-stack)
 */
export default createAppContainer(MealsFavTabNavigator);

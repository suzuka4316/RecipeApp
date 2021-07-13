// MEMO -- react-navigation-stack manages stacks of screens and the according animations required under the hood
import { createStackNavigator } from "react-navigation-stack";
// MEMO -- createAppContainer is ALWAYS imported from react-navigation, regardless of which react-navigation version you're using
import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from "../screens";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);

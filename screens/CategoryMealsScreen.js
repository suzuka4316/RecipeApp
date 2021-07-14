import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealList } from "../components";

export const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    //if catId exists in the array of categoryIds, keep the meal
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

//navigationOptions is a property and a function, that takes navigation data as a property.
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

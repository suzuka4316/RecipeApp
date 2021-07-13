import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components";

export const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id },
          });
        }}
      />
    );
  };

  //displaying 2 columns
  return (
    <FlatList
      //keyExtractor is not required for the latest React
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

// MEMO -- In JavaScript, function is an OBJECT!, meaning you can set a property for the function. 'navigationOptions' is an optional property prepared in react-navigation, and you can configure some stylying and so on.
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

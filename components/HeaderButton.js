import React from "react";
import { Platform } from "react-native";
//version 6
import { HeaderButton as RNHeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export const HeaderButton = (props) => {
  return (
    <RNHeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primary}
    />
  );
};

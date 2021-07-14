import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const DefaultText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

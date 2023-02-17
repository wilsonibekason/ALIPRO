import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const AppText = ({ children, style }) => {
  let MainPlatform = Platform.select({
    ios: {
      fontSize: 20,
      fontFamily: "Helvetica",
    },
    android: {
      fontSize: 20,
      fontFamily: "Roboto",
    },
  });
  return (
    <>
      <Text style={[styles.text, style]}>{children}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Helvetica",
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;

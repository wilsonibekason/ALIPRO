import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const AppText = ({ children, style, ...otherProps }) => {
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
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
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

import React from "react";
import { StyleSheet, Text } from "react-native";

const AppText = ({ children }) => {
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
      <Text style={styles.text}>{children}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Helvetica",
  },
});

export default AppText;

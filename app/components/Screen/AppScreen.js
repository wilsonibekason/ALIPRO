import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

const AppScreen = ({ children, style }) => {
  return (
    <>
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "transparent",
  },
});

AppScreen.propTypes = {};

AppScreen.navigationOptions = {
  header: null,
};

export default AppScreen;

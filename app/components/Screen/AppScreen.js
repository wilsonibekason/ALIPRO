import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

const AppScreen = ({ children, style }) => {
  return (
    <>
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[style, { flex: 1 }]}>{children}</View>
      </SafeAreaView>
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

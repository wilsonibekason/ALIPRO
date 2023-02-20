import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationTheme } from "../../navigation/navigationTheme";

const AppScreenNavigatorWrapper = ({ children }) => {
  return (
    <>
      <NavigationContainer theme={NavigationTheme}>
        {children}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AppScreenNavigatorWrapper;

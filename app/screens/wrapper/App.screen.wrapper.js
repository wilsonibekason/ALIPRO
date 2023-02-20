import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

const AppScreenNavigatorWrapper = ({ children }) => {
  return (
    <>
      <NavigationContainer>{children}</NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AppScreenNavigatorWrapper;

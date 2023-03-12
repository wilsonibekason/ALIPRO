import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigator from "../AppNavigator";
import FeedNavigator from "../FeedNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AppTabNavigator</Text>
    </View>
  );
};

const AppTabNavigator = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="home" component={AppNavigator}></Tab.Screen>
        <Tab.Screen name="feed" component={FeedNavigator}></Tab.Screen>
        <Tab.Screen name="settings" component={AppNavigator}></Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default AppTabNavigator;

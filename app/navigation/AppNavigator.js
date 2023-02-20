import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import ListingEditingScreen from "../components/Screen/ListingEditingScreen";
import AccountScreen from "../screens/AccountScreen/AccountScroll";
import FeedNavigator from "./FeedNavigator";
const Tab = createBottomTabNavigator();
const AppNavigator = ({}) => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="ListingEdit" component={FeedNavigator} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import ListingEditingScreen from "../components/Screen/ListingEditingScreen";
const Stack = createNativeStackNavigator();
const FeedNavigator = ({}) => {
  return (
    <>
      <Stack.Navigator screenOptions={{}} mode="modal">
        <Stack.Screen name={"Listings"}></Stack.Screen>
        <Stack.Screen
          name="ListingDetails"
          component={ListingEditingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

export default FeedNavigator;

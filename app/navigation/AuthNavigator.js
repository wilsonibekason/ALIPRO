import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import LoginScreen from "../components/Screen/LoginScreen";
import RegisterScreen from "../components/Screen/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
const Stack = createNativeStackNavigator();
const AuthNavigator = ({}) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

export default AuthNavigator;

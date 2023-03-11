import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";
import { useNavigation } from "../hooks/useNavigate";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Products = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      <Text> Hello World</Text>
      <Button
        onPress={useNavigation({ screenName: "SingleProduct", navigation })} title="Click Me"
      />
    </View>
  );
};

const SingleProduct = ({ route, navigation }) => {
  return (
    <>
      <View style={[styles.container]}>
        <Text>hello {route.params.id} </Text>
      </View>
    </>
  );
};
const LearnNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Products" component={Products}></Stack.Screen>
      <Stack.Screen name="SingleProduct" component={SingleProduct}></Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.medium,
  },
});

export default LearnNavigator;

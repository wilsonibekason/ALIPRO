import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors, { animation } from "../config/colors";
import { useNavigation } from "../hooks/useNavigate";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Settings = () => (
  <View>
    <Text>Hello World i am here to learn</Text>
  </View>
);

const Account = () => (
  <View>
    <Text>Hello I am among the Setting Options</Text>
  </View>
);

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Settings"
        // Nested
        component={LearnNavigator}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="Account" component={Account}></Tab.Screen>
    </Tab.Navigator>
  );
};
const Products = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      <Text> Hello World</Text>
      <Button
        onPress={useNavigation({ screenName: "SingleProduct", navigation })}
        title="Click Me"
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
  const { slide } = animation;
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Products" component={Products}></Stack.Screen>
      <Stack.Screen
        name="SingleProduct"
        component={SingleProduct}
        options={({ navigation, route }) => ({
          title: route.params.id,
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.medium,
  },
  containerWrapper: {},
});

export default LearnNavigator;

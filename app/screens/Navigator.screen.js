import React from "react";
import AppScreen from "../components/Screen/AppScreen";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import colors from "../config/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const Link = () => {
  const navigation = useNavigation();
  return <Button onPress={() => navigation.navigate("TweetDetails")}></Button>;
};
const Tweets = ({ navigation }) => (
  <AppScreen>
    <Button
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    ></Button>
    {/* <Link></Link> */}
  </AppScreen>
);
const TweetDetails = ({ route, navigation }) => {
  <AppScreen>
    <Text>tWEET Details{route.params.id} </Text>
  </AppScreen>;
};
const Account = ({ route, navigation }) => {
  <AppScreen>
    <Text>Account</Text>
  </AppScreen>;
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveBackgroundColor: colors.tomato }}
    >
      <Tab.Screen
        name={"Tweets"}
        component={StackNavigatorScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              name="home"
              selectable
              size={size}
              color={color}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name={"Accounts"} component={Account}>
        {" "}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
const StackNavigatorScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tweets"
      screenOptions={({ navigation, route }) => ({
        headerStyle: { backgroundColor: colors.tomato },
        headerTintColor: colors.white,
        headerTitleStyle: { color: colors.white },
        headerLeft: () => (
          <View>
            <Button
              onPress={() => {
                navigation.goBack();
                console.log(navigation);
                console.log(navigation.state);
                console.log(navigation.state.params);
                console.log(navigation.state.params.id);
              }}
            ></Button>
          </View>
        ),
      })}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={({ route, navigation }) => ({
          title: route.params.id,
          headerStyle: { backgroundColor: colors.tomato },
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="TweetsDetails"
        component={TweetDetails}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigatorScreen;

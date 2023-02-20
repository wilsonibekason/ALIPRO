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
import { Button, Text } from "react-native";
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
const Stack = createNativeStackNavigator();
const StackNavigatorScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Tweets">
      <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
      <Stack.Screen
        name="TweetsDetails"
        component={TweetDetails}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigatorScreen;

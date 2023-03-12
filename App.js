import {
  StyleSheet,
  Text,
  View,
  ImagePropsAndroid,
  SafeAreaView,
  SafeAreaViewBase,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useImageDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Styles from "./app/screens/delete/Styles";
import AppMessageScreen from "./app/components/MessageScreen/AppMessageScreen";
import AccountScreen from "./app/screens/AccountScreen/AccountScroll";
import TextInput from "./app/components/TextInput/TextInput";
import AppTextInput from "./app/components/TextInput/TextInput";
import { useCallback, useState } from "react";
import AppPicker from "./app/components/TextInput/AppPicker";
import { AppScreen } from "./app/components";
import { categories } from "./app/utils/data";
import LoginScreen from "./app/components/Screen/LoginScreen";
import ListingEditingScreen from "./app/components/Screen/ListingEditingScreen";
import AppScreenNavigatorWrapper from "./app/screens/wrapper/App.screen.wrapper";
import { TabNavigator } from "./app/screens/Navigator.screen";
import LearnNavigator from "./app/navigation/LearnNavigator";

export default function App() {
  return (
    <>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
      {/* <Styles /> */}
      {/* <AppMessageScreen /> */}
      {/* <AccountScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ListingEditingScreen /> */}
      {/* <AppScreenNavigatorWrapper> */}
      {/* <TabNavigator /> */}
      {/* <LearnNavigator /> */}
      {/* </AppScreenNavigatorWrapper> */}
    </>
  );
}

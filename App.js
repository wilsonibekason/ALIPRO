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

export default function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Styles /> */}
      {/* <AppMessageScreen /> */}
      <AccountScreen />
    </>
  );
}

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
import { useState } from "react";
import AppPicker from "./app/components/TextInput/AppPicker";
import { AppScreen } from "./app/components";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = setModalVisible((prevState) => !prevState);
  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Styles /> */}
      {/* <AppMessageScreen /> */}
      {/* <AccountScreen /> */}
      <AppScreen>
        <AppTextInput
          icon={"email"}
          onChangeText={(text) => setFirstName(text)}
          placeholder={"Enter your Name"}
        />
        <AppPicker
          placeholder={"Catregory"}
          icon={"file"}
          onPress={handleModal}
          modalVisible={modalVisible}
        />
        <AppTextInput icon={"email"} placeholder={"enter"} />
      </AppScreen>
    </>
  );
}

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

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState(categories[0]);
  const handleModal = useCallback(() => {
    setModalVisible((prevState) => !prevState);
  }, [modalVisible]);
  const handleSelectedItems = useCallback(
    (items) => setSelectedItems(items),
    [selectedItems]
  );
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
          items={categories}
          selectedItems={selectedItems}
          onSelectedItemsChange={handleSelectedItems}
        />
      </AppScreen>
    </>
  );
}

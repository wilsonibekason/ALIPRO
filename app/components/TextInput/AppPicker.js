import React from "react";
import {
  StyleSheet,
  TextInputBase,
  TextInput,
  TextInputComponent,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import AppScreen from "../Screen/AppScreen";

const AppPicker = ({
  placeholder,
  onChangeText,
  maxLength,
  icon,
  onPress,
  modalVisible,
  ...otherProps
}) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container]}>
          <MaterialCommunityIcons
            name={icon}
            color={colors.medium}
            style={styles.icon}
            size={30}
          />
          <AppText style={styles.text}>{placeholder} </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            color={colors.medium}
            style={styles.icon}
            size={30}
          />
        </View>
      </TouchableWithoutFeedback>
      <AppScreen>
        <Modal visible={modalVisible} animationType={"slide"}>
          <Button title="close"></Button>
        </Modal>
      </AppScreen>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    width: "100%",
  },
  textInput: {
    fontSize: 16,
    color: colors.darkGray,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;

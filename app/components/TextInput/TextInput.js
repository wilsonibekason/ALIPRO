import React from "react";
import {
  StyleSheet,
  TextInputBase,
  TextInput,
  TextInputComponent,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const AppTextInput = ({
  placeholder,
  onChangeText,
  maxLength,
  icon,
  ...otherProps
}) => {
  return (
    <View style={[styles.container]}>
      <MaterialCommunityIcons
        name={icon}
        color={colors.medium}
        style={styles.icon}
        size={30}
      />
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        maxLength={maxLength}
        clearButtonMode={"always"}
        secureTextEntry
        {...otherProps}
      />
    </View>
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
});

export default AppTextInput;

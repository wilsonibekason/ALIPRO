import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const AppIcon = ({ name, size, backgroundColor, iconColor }) => {
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        styles.iconContainer,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});
export default AppIcon;

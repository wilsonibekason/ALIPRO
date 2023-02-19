import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppIcon from "../AppIcon/AppIcon";
import AppText from "../AppText/AppText";

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <>
      <View style={[styles.container]}>
        <AppIcon
          backgroundColor={item.backgroundColor}
          iconColor={item.iconColor}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
    backgroundColor: colors.white,
    width: "100%",
    maxWidth: "33%",
  },
  label: {
    paddingTop: 5,
    alignItems: "center",
  },
});

export default CategoryPickerItem;

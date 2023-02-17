import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ListItemSeperator = () => {
  return (
    <>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.lightGray,
    width: "100%",
  },
});

export default ListItemSeperator;

import React from "react";
import { StyleSheet, View } from "react-native";

const AppImage = () => {
  return (
    <>
      <View style={styles.container}></View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AppImage;

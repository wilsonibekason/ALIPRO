import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" size={40} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={40}
            color={"tomato"}
          />
        </View>
        <Image
          source={require("../assets/chair.jpg")}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.white,
    position: "absolute",
    top: 40,
    left: 30,
    borderRadius: 50,
  },
  deleteIcon: {
    backgroundColor: colors.white,
    position: "absolute",
    top: 40,
    right: 30,
    borderRadius: 50,
    color: colors.tomato,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

const MainButton = ({ title, onPress, color = "primary" }) => {
  return (
    <>
      <TouchableOpacity>
        <View
          style={[styles.button, { backgroundColor: colors[color] }]}
          onPress={onPress}
        >
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 25,
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
    textAlign: "center",
  },
});

export default MainButton;

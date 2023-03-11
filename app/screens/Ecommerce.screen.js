import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

const EcommerceScreen = () => {
    const {container}  = styles
  return (
    <View>
      <Text style={[container]}>EcommerceScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    border: `2px solid ${colors.lightGray}`,
  },
});
export default EcommerceScreen;

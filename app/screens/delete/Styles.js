import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../../components/AppText/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainButton from "../../components/MainButton";
import WelcomeScreen from "../WelcomeScreen";
import { AppCard } from "../../components/AppCard";

const Styles = () => {
  return (
    <>
      {/* <WelcomeScreen /> */}
      <AppCard
        // image={require("../../app/assets/jacket.jpg")}
        subTitle={"$100"}
        title={"Appl"}
      />
    </>
  );
};
const styles = StyleSheet.create({
  containter: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 100,
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "tomato",
    borderRadius: 50,
    borderTopWidth: 10,
    marginTop: 100,
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 10 },
    elevation: 30,
  },
  child: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
    paddingHorizontal: 20,
  },
});

export default Styles;

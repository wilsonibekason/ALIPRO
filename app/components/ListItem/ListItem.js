import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.title}>{subTitle}</AppText>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  detailContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default ListItem;

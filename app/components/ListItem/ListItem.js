import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
          <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
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
  subTitle: {
    fontSize: 15,
    color: colors.medium,
  },
  detailContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default ListItem;

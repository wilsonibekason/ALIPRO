import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
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
    backgroundColor: colors.white,
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
    fontWeight: "light",
    color: colors.black,
    verticalAlign: "middle",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 15,
    color: colors.medium,
  },
  detailContainer: {
    marginLeft: 10,
  },
});

export default ListItem;

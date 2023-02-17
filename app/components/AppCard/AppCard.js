import React from "react";
import { Image, View } from "react-native";
import AppText from "../AppText/AppText";
import { styles } from "./style";

const AppCard = ({ title, subTitle, image }) => {
  return (
    <>
      <View style={styles.card}>
        <Image
          source={require("../../../app/assets/jacket.jpg")}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}> {title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </>
  );
};

export default AppCard;

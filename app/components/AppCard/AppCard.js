import React from "react";
import { Image, View } from "react-native";
import AppText from "../AppText/AppText";
import ListItem from "../ListItem/ListItem";
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
          <View style={styles.userContainer}>
            <ListItem
              title={"Wilson Ibekason"}
              image={require("../../../app/assets/mosh.jpg")}
              subTitle={"$3383"}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default AppCard;

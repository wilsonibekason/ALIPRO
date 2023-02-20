import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import ListItem from "../ListItem/ListItem";

const ListingDetailScreen = ({ route }) => {
  const listing = route.params;
  return (
    <>
      <View>
        <Image
          style={styles.Image}
          source={require("../../../app/assets/jacket.jpg")}
        />
        <View style={styles.detailsContainer}>
          <AppText>Title</AppText>
          <AppText>100</AppText>
          <View>
            <ListItem
              image={listing.image}
              title={listing.title}
              subTitle={listing.subTitle}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    margin: 5,
  },
  price: {
    padding: 2,
    fontWeight: "600",
    fontSize: 20,
    color: colors.black,
    textAlign: "center",
  },
  title: {},
});

export default ListingDetailScreen;

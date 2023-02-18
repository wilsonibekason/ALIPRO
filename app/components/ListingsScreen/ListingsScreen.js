import React from "react";
import { FlatList, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { initialMessages } from "../../utils/data";
import { AppCard } from "../AppCard";
import AppScreen from "../Screen/AppScreen";

const ListingsScreen = () => {
  return (
    <>
      <AppScreen style={styles.screen}>
        <FlatList
          data={initialMessages}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              image={item.image}
              subTitle={item.description}
              title={item.title}
              key={item.id}
            />
          )}
        />
      </AppScreen>
    </>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});
export default ListingsScreen;

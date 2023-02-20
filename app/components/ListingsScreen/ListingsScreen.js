import React from "react";
import { FlatList, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { useNavigation } from "../../hooks/useNavigate";
import { initialMessages } from "../../utils/data";
import { AppCard } from "../AppCard";
import AppScreen from "../Screen/AppScreen";

const ListingsScreen = ({ navigation, route }) => {
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
              onPress={useNavigation({
                screenName: "ListingDetails",
                navigation,
                item,
              })}
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

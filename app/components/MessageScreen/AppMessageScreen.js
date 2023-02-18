import React from "react";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";
import ListItem from "../ListItem/ListItem";
import ListItemSeperator from "../ListItemSeperator";
import AppScreen from "../Screen/AppScreen";

const AppMessageScreen = () => {
  const messages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../../../app/assets/mosh.jpg"),
    },
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../../../app/assets/mosh.jpg"),
    },
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../../../app/assets/mosh.jpg"),
    },
  ];
  return (
    <>
      <AppScreen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.description}
              subTitle={item.title}
              image={item.image}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeperator />}
        />
      </AppScreen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default AppMessageScreen;

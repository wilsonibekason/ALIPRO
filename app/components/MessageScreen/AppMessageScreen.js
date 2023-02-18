import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import ListItem from "../ListItem/ListItem";
import Constants from "expo-constants";

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
      <SafeAreaView style={styles.screen}>
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
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default AppMessageScreen;

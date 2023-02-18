import React, { useState } from "react";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { initialMessages } from "../../utils/data";
import ListItem from "../ListItem/ListItem";
import ListItemDeleteAction from "../ListItemComposables/ListItemDeleteAction";
import ListItemSeperator from "../ListItemSeperator";
import AppScreen from "../Screen/AppScreen";

const AppMessageScreen = () => {
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 150, 100, 101],
      outputRange: [-20, 0, 0, 1],
      extrapolate: "clamp",
    });
    return (
      <View style={{ transform: [{ translateX: trans }] }}>
        <ListItemDeleteAction onPress={() => console.log(progress)} />
      </View>
    );
  };

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = ({ item }) => {
    // Delete the selected item
    //Serve the selected item to the BE
    const newMessage = messages.filter((item) => item.id !== item);
    setMessages(newMessage);
  };
  handleRefreshing = () => setMessages(initialMessages.slice(0, -1));
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
              onPress={() => console.log()}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={handleDelete} />
              )}
              key={item.id}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeperator />}
          refreshing={refreshing}
          onRefresh={handleRefreshing}
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

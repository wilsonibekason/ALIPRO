import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { AppIcon, AppScreen, ListItem } from "../../components";
import ListItemSeperator from "../../components/ListItemSeperator";
import colors from "../../config/colors";
import { menuItems } from "../../utils/data";

const AccountScreen = () => {
  return (
    <>
      <AppScreen style={styles.screen}>
        <View>
          <ListItem
            title={"Wilson Ibekason"}
            subTitle={"Wilsonibekason@gmail.com"}
            IconComponent={
              <AppIcon
                backgroundColor={colors.primary}
                size={40}
                iconColor={"blue"}
                name={"email"}
              />
            }
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            ItemSeparatorComponent={<ListItemSeperator />}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => (
              <ListItem
                IconComponent={
                  <AppIcon
                    backgroundColor={item.icon.backgroundColor}
                    size={item.icon.size}
                    iconColor={item.icon.iconColor}
                    name={item.icon.name}
                  />
                }
                subTitle={item.description}
                title={item.title}
                key={item.key}
              />
            )}
          />
        </View>
      </AppScreen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
  },
  container: {
    marginVertical: 10,
  },
});
export default AccountScreen;

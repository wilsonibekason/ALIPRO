import React from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="trash-can" size={35} />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;

import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({
  imageuri,
  selecImageFn,
  onChangeImage,
  requestPermissionFN,
}) => {
  const onPress = () => {
    if (!imageuri) selecImageFn();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        {
          isPreferred: true,
          text: "Delete",
          onPress: () => onChangeImage(null),
        },
        {
          isPreferred: true,
          text: "Cancel",
          onPress: () => console.log(),
        },
      ]);
  };

  React.useEffect(() => {
    React.findDOMNode(ImageInput);
    requestPermissionFN();
  });
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container]}>
          {!imageuri && (
            <MaterialCommunityIcons name="camera" color={colors.medium} />
          )}
          {imageuri && (
            <Image style={styles.image} source={{ uri: imageuri }} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    alignItems: "center",
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
  },
});

export default ImageInput;

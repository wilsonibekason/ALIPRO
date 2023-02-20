import React, { useEffect } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppScreen from "./AppScreen";
import MainButton from "../MainButton";

const ImagePickerScreen = ({}) => {
  const [imageUri, setImageUri] = useState("");
  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.LOCATION
    );

    const { canAskAgain, expires, granted } =
      await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need permission to access your camera");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync();
      if (!canceled) {
        setImageUri(assets[0].uri);
      }
    } catch (error) {
      console.log("Erro Reading ImagePicker", error);
    }
  };
  return (
    <>
      <AppScreen>
        <MainButton title={"Select Image"} onPress={selectImage}></MainButton>
        <Image source={{ uri: imageUri }} style={[styles.image]} />
      </AppScreen>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default ImagePickerScreen;

import React, { useEffect } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppScreen from "./AppScreen";
import MainButton from "../MainButton";
import ImageInputItem from "../Forms/ImagePicker/ImageInputItem";

const ImagePickerScreen = ({}) => {
  const [imageUri, setImageUri] = useState([]);
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
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!canceled) {
        setImageUri(assets[0].uri);
      }
    } catch (error) {
      console.log("Erro Reading ImagePicker", error);
    }
  };

  const handleAdd = (uri) => {
    setImageUri([...imageUri, uri]);
  };

  const handleRemove = (uri) => {
    setImageUri(imageUri.filter((item) => item !== uri));
  };
  return (
    <>
      <AppScreen>
        <MainButton title={"Select Image"} onPress={selectImage}></MainButton>
        <Image source={{ uri: imageUri }} style={[styles.image]} />
        <ImageInputItem
          imageUris={imageUri}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
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

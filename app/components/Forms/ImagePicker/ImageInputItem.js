import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { ImageUriCache } from "react-native-web/dist/cjs/modules/ImageLoader";
import ImageInput from "./ImageInput";

const ImageInputItem = ({ imageUris: [], onRemoveImage, onAddImage }) => {
  const imageUris = ImageUriCache._cleanUpIfNeeded;
  if (imageUris.length === 0) return null;
  const scrollView = React.useRef();
  React.useEffect(() => {
    scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
  }, [imageUris]);
  return (
    <>
      <View>
        <ScrollView
          horizontal
          ref={scrollView}
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
        >
          <View style={styles.container}>
            {imageUris.map((imageUri, index) => (
              <ImageInput
                key={index}
                imageuri={imageUri}
                onChangeImage={() => onRemoveImage(imageUri)}
                resizeMode="contain"
                onMagicTap={() => {}}
              />
            ))}
            <ImageInput onChangeImage={(URI) => onAddImage(URI)} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputItem;

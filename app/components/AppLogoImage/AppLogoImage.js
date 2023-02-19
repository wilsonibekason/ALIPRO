import React from "react";
import { Image } from "react-native";

const AppLogoImage = ({ style, source }) => {
  return (
    <>
      <Image style={[style]} source={source} />
    </>
  );
};

export default AppLogoImage;

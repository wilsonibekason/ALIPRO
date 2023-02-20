import React from "react";
import { StyleSheet, View } from "react-native";
import ImageInputItem from "./ImagePicker/ImageInputItem";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { errors, touched, values, setFieldTouched, setFieldValue } =
    useFormikContext();
  consrt;
  const handleAddImage = (uri) => {
    setFieldValue(name, [...values[name], uri]);
    setFieldTouched(name, true);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      values[name].filter((item) => item !== uri)
    );
    setFieldTouched(name, true);
  };
  return (
    <>
      <View>
        <ImageInputItem
          imageUris={values[name]}
          touched={touched[name]}
          onAddImage={handleAddImage}
          onRemoveImage={handleRemoveImage}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default FormImagePicker;

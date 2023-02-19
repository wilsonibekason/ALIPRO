import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext, useField, useFormik } from "formik";
import AppTextInput from "../TextInput/TextInput";
import ErrorMessage from "../Forms/ErrorMessage";

const AppFormField = ({ name, value, ...otherProps }) => {
  const { errors, setFieldTouched, handleChange, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onSubmitEditing={() => {
          return;
        }}
        onChangeText={handleChange("password")}
        onBlur={() => setFieldTouched("password")}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
const styles = StyleSheet.create({});

export default AppFormField;

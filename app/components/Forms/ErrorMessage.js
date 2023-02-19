import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText/AppText";
import { ErrorMessage as Error } from "formik";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <>
      <AppText style={[styles.error]}>{error} </AppText>
    </>
  );
};
const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    alignSelf: "center",
    marginTop: 2,
    marginBottom: 2,
  },
});

export default ErrorMessage;

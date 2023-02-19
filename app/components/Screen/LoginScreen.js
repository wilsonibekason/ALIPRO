import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet } from "react-native";
import MainButton from "../MainButton";
import AppTextInput from "../TextInput/TextInput";
import AppScreen from "./AppScreen";
import * as Yup from "yup";
import zud from "zod";
import AppText from "../AppText/AppText";
import ErrorMessage from "../Forms/ErrorMessage";
import AppFormField from "../AppFormField/AppFormField";
import AppSubmitButton from "../Forms/AppSubmitButton";
import AppForm from "../Forms/AppForm";

const ValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password").min(4),
});

const LoginScreen = () => {
  return (
    <>
      <AppScreen style={styles.container}>
        <Image
          style={[styles.logo]}
          source={require("../../assets/logo-red.png")}
        />
        <AppForm
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={ValidationSchema}
        >
          <AppFormField
            placeholder={"email"}
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"email"}
            keyboardType={"email-address"}
            returnKeyType={"next"}
            name={"email"}
            onSubmitEditing={() => {
              return;
            }}
            value={""}
            style={[styles.input]}
            textContentType={"emailAddress"}
            placeholderTextColor={"#999"}
            underlineColorAndroid={"transparent"}
          />

          <AppFormField
            placeholder={"password"}
            autoCapitalize={"none"}
            autoCorrect={false}
            icon={"lock"}
            keyboardType={"password"}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              return;
            }}
            secureTextEntry
            value={""}
            style={[styles.input]}
            textContentType={"emailAddress"}
            placeholderTextColor={"#999"}
            underlineColorAndroid={"transparent"}
            name={"password"}
          />
          <AppSubmitButton title={"Submit"} />
        </AppForm>
      </AppScreen>
    </>
  );
};

LoginScreen.propTypes = {};
LoginScreen.defaultProps = {};
LoginScreen.displayName = "LoginScreen";
const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;

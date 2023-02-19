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
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={ValidationSchema}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
            return (
              <>
                <AppTextInput
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
                  onChangeText={handleChange("email")}
                  value={""}
                  style={[styles.input]}
                  textContentType={"emailAddress"}
                  placeholderTextColor={"#999"}
                  underlineColorAndroid={"transparent"}
                />
                <ErrorMessage error={errors.email} />

                <AppTextInput
                  placeholder={"password"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  icon={"lock"}
                  keyboardType={"password"}
                  returnKeyType={"next"}
                  onSubmitEditing={() => {
                    return;
                  }}
                  onChangeText={handleChange("password")}
                  secureTextEntry
                  value={""}
                  style={[styles.input]}
                  textContentType={"emailAddress"}
                  placeholderTextColor={"#999"}
                  underlineColorAndroid={"transparent"}
                />
                <ErrorMessage error={errors.password} />
                <MainButton onPress={handleSubmit} title={"Submit"} />
              </>
            );
          }}
        </Formik>
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

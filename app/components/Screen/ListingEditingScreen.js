import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Text } from "react-native";
import AppScreen from "./AppScreen";
import StyleSchemes from "../../config/styles";
import AppTextInput from "../TextInput/TextInput";
import AppPicker from "../TextInput/AppPicker";
import { StyleSheet } from "react-native";
import AppFormPicker from "../Forms/AppFormPicker";
import { categories } from "../../utils/data";
import AppForm from "../Forms/AppForm";
import AppFormField from "../AppFormField/AppFormField";
import AppSubmitButton from "../Forms/AppSubmitButton";
import AppLogoImage from "../AppLogoImage/AppLogoImage";
import CategoryPickerItem from "../Forms/CategoryPickerItem";

const ListingEditingScreen = () => {
  const ValidationSchema = Yup.object().shape({
    title: Yup.string().required().label("Email").min(1),
    price: Yup.number().required().label("Password").min(1).max(10000),
    description: Yup.string().label("Description"),
    category: Yup.object().required().label("Category").nullable(),
  });
  return (
    <>
      <AppScreen style={[StyleSchemes.container]}>
        <AppLogoImage
          style={[styles.logo]}
          source={require("../../assets/logo-red.png")}
        />

        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={ValidationSchema}
        >
          <>
            <AppFormField
              placeholder={"text"}
              autoCapitalize={"none"}
              icon={"message"}
              keyboardType={"email-address"}
              returnKeyType={"next"}
              name={"title"}
              textContentType={"Text"}
              placeholderTextColor={"#999"}
              underlineColorAndroid={"transparent"}
            />

            <AppFormField
              placeholder={"price"}
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"lock"}
              keyboardType={"password"}
              returnKeyType={"next"}
              style={[styles.input]}
              textContentType={"Price"}
              placeholderTextColor={"#999"}
              underlineColorAndroid={"transparent"}
              name={"price"}
            />
            <AppFormField
              placeholder={"description"}
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"lock"}
              name="description"
              keyboardType="numeric"
            />

            <AppFormPicker
              placeholder={"Catregory"}
              icon={"file"}
              // onPress={handleModal}
              modalVisible={false}
              items={categories}
              name={"category"}
              PickerItemComponent={CategoryPickerItem}
              numberOfColumns={3}
            />
            <AppSubmitButton title={"Submit"} />
          </>
        </AppForm>
      </AppScreen>
    </>
  );
};
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
export default ListingEditingScreen;

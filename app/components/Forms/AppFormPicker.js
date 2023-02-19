import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../TextInput/AppPicker";
import AppTextInput from "../TextInput/TextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  text,
  items,
  name,
  placeholder,
  modalVisible,
  PickerItemComponent,
  numberOfColumns = 1,
}) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const handleSelectedItems = (item) => setFieldValue(name, item);
  return (
    <>
      <AppTextInput
        icon={"email"}
        onChangeText={(text) => setFirstName(text)}
        placeholder={"Enter your Name"}
        PickerItemComponent={PickerItemComponent}
      />
      <AppPicker
        placeholder={placeholder}
        icon={"file"}
        // onPress={handleModal}
        modalVisible={modalVisible}
        items={items}
        selectedItems={values[name]}
        onSelectedItemsChange={handleSelectedItems}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

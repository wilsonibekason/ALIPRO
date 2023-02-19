import React, { useCallback, useState } from "react";
import AppPicker from "../TextInput/AppPicker";
import AppTextInput from "../TextInput/TextInput";
import AppScreen from "./AppScreen";

const InputScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState(categories[0]);
  const handleModal = useCallback(() => {
    setModalVisible((prevState) => !prevState);
  }, [modalVisible]);
  const handleSelectedItems = useCallback(
    (items) => setSelectedItems(items),
    [selectedItems]
  );
  return (
    <>
      <AppScreen>
        <AppTextInput
          icon={"email"}
          onChangeText={(text) => setFirstName(text)}
          placeholder={"Enter your Name"}
        />
        <AppPicker
          placeholder={"Catregory"}
          icon={"file"}
          onPress={handleModal}
          modalVisible={modalVisible}
          items={categories}
          selectedItems={selectedItems}
          onSelectedItemsChange={handleSelectedItems}
        />
      </AppScreen>
    </>
  );
};

export default InputScreen;

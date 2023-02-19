import { useFormikContext } from "formik";
import React from "react";
import MainButton from "../MainButton";

const AppSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      <MainButton title={title} onPress={handleSubmit} />
    </>
  );
};

export default AppSubmitButton;

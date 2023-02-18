import React from "react";
import { Switch, DatePickerIOSBase } from "react-native";

const AppSwitch = ({ value, isValueChange }) => {
  return (
    <>
      <Switch value={value} isValueChange={isValueChange} />
    </>
  );
};

export default AppSwitch;

import React from "react";
import DropdownAlert, {
  DropdownAlertData,
  DropdownAlertType,
} from "react-native-dropdownalert";

let alertAsync = (_data: DropdownAlertData) => {
  return new Promise<DropdownAlertData>((res) => res);
};

const ToastAlert = () => {
  return <DropdownAlert alert={(func) => (alertAsync = func)} />;
};

export { ToastAlert, alertAsync };

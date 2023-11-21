import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";

interface IInput extends TextInputProps {
  value: string;
  label?: string;
  onChangeText: (text: string) => void;
}

const Input = ({ label, value, onChangeText, ...props }: IInput) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

export default Input;

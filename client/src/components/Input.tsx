import React from "react";
import { Input as UIKInput, InputProps } from "@ui-kitten/components";

interface IInput extends InputProps {
  value: string;
  label?: string;
  onChangeText: (text: string) => void;
}

const Input = ({ label, value, onChangeText, ...props }: IInput) => {
  return (
    <UIKInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

export default Input;

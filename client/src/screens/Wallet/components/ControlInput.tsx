import React from "react";
// import Input from "../../../components/Input";
import { TextInput, View, TextStyle } from "react-native";
import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../types";
import { InputProps } from "@ui-kitten/components";
import Text from "../../../components/Text";
import { useTheme } from "@react-navigation/native";

interface IControlInput extends UseControllerProps<FormValues> {
  label?: string;
  placeholder?: string;
  labelStyle?: TextStyle;
}

type ControlInputType = IControlInput & InputProps;

const ControlInput = (props: ControlInputType) => {
  const { field, fieldState } = useController(props);
  const { colors } = useTheme();

  return (
    <>
      {props.label && (
        <View style={[{ flexDirection: "row" }, props.labelStyle]}>
          <Text>{props.label}</Text>
          {!!fieldState?.error?.message && (
            <Text style={{ color: "red" }}>*</Text>
          )}
        </View>
      )}
      <TextInput
        value={field.value.toString()}
        onChangeText={field.onChange}
        placeholder={props.placeholder}
        placeholderTextColor={colors.description}
        {...props}
      />
    </>
  );
};

export default ControlInput;

import React from "react";
// import Input from "../../../components/Input";
import { TextInput, View, TextStyle, Platform } from "react-native";
import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../types";
import Text from "../../../components/Text";
import { TextInputProps } from "react-native-paper";
import { useTheme } from "react-native-paper";

interface IControlInput extends UseControllerProps<FormValues> {
  label?: string;
  placeholder?: string;
  labelStyle?: TextStyle;
}

type ControlInputType = IControlInput & TextInputProps;

const ControlInput = (props: ControlInputType) => {
  const { field, fieldState } = useController(props);
  const { colors, dark } = useTheme();

  return (
    <>
      {props.label && (
        <View style={[{ flexDirection: "row" }, props.labelStyle]}>
          <Text variant="labelMedium">{props.label}</Text>
          {!!fieldState?.error?.message && (
            <Text style={{ color: "red" }}>*</Text>
          )}
        </View>
      )}
      <TextInput
        value={field.value.toString()}
        onChangeText={field.onChange}
        placeholder={props.placeholder}
        placeholderTextColor={colors.onSurfaceVariant}
        color={colors.onBackground}
        {...props}
      />
    </>
  );
};

export default ControlInput;

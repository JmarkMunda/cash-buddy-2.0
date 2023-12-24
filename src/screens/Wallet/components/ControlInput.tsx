import React from "react";
// import Input from "../../../components/Input";
import { TextInput, View, TextStyle } from "react-native";
import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../types";
import Text from "../../../components/Text";
import { TextInputProps } from "react-native-paper";
import { useAppTheme } from "../../../utils/theme";

interface IControlInput extends UseControllerProps<FormValues> {
  label?: string;
  placeholder?: string;
  labelStyle?: TextStyle;
}

type ControlInputType = IControlInput & TextInputProps;

const ControlInput = (props: ControlInputType) => {
  const { field, fieldState } = useController(props);
  const { colors } = useAppTheme();

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
        placeholderTextColor={colors.outline}
        color={colors.onBackground}
        style={{
          textAlign: "center",
          fontSize: 32,
          marginVertical: 8,
          height: 100,
        }}
        {...props}
      />
    </>
  );
};

export default ControlInput;

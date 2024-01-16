import React from "react";
import { View } from "react-native";
import { UseControllerProps, useController } from "react-hook-form";
import { FormValues } from "../types";
import AppStyles from "../../../utils/styles";
import spacings from "../../../utils/spacings";
import Text from "../../../components/Text";
import ButtonContainer from "../../../components/ButtonContainer";
import { useAppTheme } from "../../../utils/theme";

interface IControlColors extends UseControllerProps<FormValues> {
  onPickColorPress: () => void;
}

const ControlColors = ({ name, control, onPickColorPress }: IControlColors) => {
  const { field, fieldState } = useController({ name, control });
  const { colors } = useAppTheme();

  return (
    <ButtonContainer
      containerStyle={[AppStyles.flex_row, spacings.py8]}
      onPress={onPickColorPress}>
      <Text
        variant="labelLarge"
        color={fieldState.error ? colors.error : colors.onBackground}>
        Pick a color:
      </Text>
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: `${field.value}`,
          marginHorizontal: 8,
          borderRadius: 99,
          borderWidth: 1,
          borderColor: fieldState.error ? colors.error : colors.onBackground,
        }}
      />
    </ButtonContainer>
  );
};

export default ControlColors;

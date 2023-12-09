import React from "react";
import ButtonContainer from "../../../components/ButtonContainer";
import Text from "../../../components/Text";
import { StyleSheet } from "react-native";
import shadows from "../../../utils/shadows";
import { useTheme } from "react-native-paper";
import * as Haptics from "expo-haptics";

interface IButton {
  title: string;
  width?: number;
  height?: number;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({
  title,
  width = 80,
  height = 80,
  onPress,
  disabled,
  ...props
}: IButton) => {
  const { colors } = useTheme();

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <ButtonContainer
      containerStyle={[
        styles.container,
        {
          width,
          height,
          ...(!disabled ? shadows.lg : shadows.sm),
          backgroundColor: !disabled
            ? colors.background
            : colors.surfaceVariant,
        },
      ]}
      onPress={handlePress}
      disabled={disabled}
      {...props}>
      <Text variant="displaySmall">{title}</Text>
    </ButtonContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },
});

export default Button;

import React from "react";
import ButtonContainer from "../../../components/ButtonContainer";
import Text from "../../../components/Text";
import { StyleSheet } from "react-native";
import shadows from "../../../utils/shadows";
import { useTheme } from "react-native-paper";

interface IButton {
  title: string;
  width?: number;
  height?: number;
}

const Button = ({ title, width = 80, height = 80, ...props }: IButton) => {
  const { colors } = useTheme();
  return (
    <ButtonContainer
      containerStyle={[
        styles.container,
        { width, height, backgroundColor: colors.background },
      ]}
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
    ...shadows.lg,
  },
});

export default Button;

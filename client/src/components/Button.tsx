import React from "react";

import { StyleSheet, ViewStyle, StyleProp } from "react-native";

import { Button as PaperButton, ButtonProps } from "react-native-paper";

interface IButtonProps extends ButtonProps {
  children: string;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  children,
  loading = false,
  onPress,
  style,
  ...props
}: IButtonProps) => {
  return (
    <PaperButton
      style={[styles.button, style]}
      loading={loading}
      disabled={loading}
      onPress={onPress}
      {...props}>
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    padding: 8,
  },
});

export default Button;

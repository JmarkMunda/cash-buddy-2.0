import React from "react";
import {
  Button as UKButton,
  ButtonProps,
  Spinner,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";

interface IButtonProps extends ButtonProps {
  children: string;
  status?:
    | "primary"
    | "success"
    | "danger"
    | "info"
    | "warning"
    | "basic"
    | "control";
  size?: "tiny" | "small" | "medium" | "large" | "giant";
  appearance?: "filled" | "outline" | "ghost";
  loading?: boolean;
}

const Button = ({
  children,
  status = "primary",
  size = "medium",
  appearance = "filled",
  loading = false,
  style,
  ...props
}: IButtonProps) => {
  return (
    <UKButton
      status={status}
      size={size}
      appearance={appearance}
      style={[styles.button, style]}
      {...props}>
      {children}
    </UKButton>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
  },
});

export default Button;

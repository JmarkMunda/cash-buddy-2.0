import React from "react";
import { Text as UKText, TextProps } from "@ui-kitten/components";
import { useTheme } from "@react-navigation/native";

interface ITextProps extends TextProps {
  children: string;
}

const Text = ({ children, style, ...props }: ITextProps) => {
  const { colors } = useTheme();

  return (
    <UKText style={[{ color: colors.text }, style]} {...props}>
      {children}
    </UKText>
  );
};

export default Text;

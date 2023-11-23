import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text as PaperText, TextProps } from "react-native-paper";
import { useTheme } from "react-native-paper";

interface ITextProps extends TextProps<any> {
  children: string;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Text = ({ children, color, style, ...props }: ITextProps) => {
  const { colors } = useTheme();

  return (
    <PaperText
      style={[{ color: color ?? colors.onBackground }, style]}
      {...props}>
      {children}
    </PaperText>
  );
};

export default Text;

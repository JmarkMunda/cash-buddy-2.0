import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, ViewProps, StyleSheet } from "react-native";
import shadows from "../utils/shadows";
import spacings from "../utils/spacings";

interface ICardProps extends ViewProps {
  children: React.ReactNode;
  shadow: "sm" | "md" | "lg";
}

const Card = ({ children, shadow, style, ...props }: ICardProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        { backgroundColor: colors.background },
        styles.card,
        shadows[shadow],
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    ...spacings.p24,
    borderRadius: 16,
  },
});

export default Card;

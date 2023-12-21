import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import shadows from "../utils/shadows";
import spacings from "../utils/spacings";
import { useAppTheme } from "../utils/theme";

interface ICardProps extends ViewProps {
  children: React.ReactNode;
  shadow: "sm" | "md" | "lg";
}

const Card = ({ children, shadow, style, ...props }: ICardProps) => {
  const { colors } = useAppTheme();

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

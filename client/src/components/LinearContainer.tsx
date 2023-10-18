import React from "react";
import AppStyles from "../utils/styles";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

interface ILinearContainerProps extends LinearGradientProps {
  children: React.ReactNode;
  colors: string[];
}

const LinearContainer = ({
  children,
  colors,
  style,
  ...props
}: ILinearContainerProps) => {
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
      colors={colors}
      style={[styles.container, { paddingTop: headerHeight + 16 }, style]}
      {...props}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    ...AppStyles.container,
    flex: 1,
  },
});

export default LinearContainer;

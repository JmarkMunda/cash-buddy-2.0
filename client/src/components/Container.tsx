import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { BlurView } from "expo-blur";
import { useTheme } from "@react-navigation/native";

interface IContainer {
  children?: React.ReactNode;
  intensity?: number;
  radius?: number;
  style?: StyleProp<ViewStyle>;
}

const Container = ({
  children,
  intensity = 100,
  radius,
  style,
  ...props
}: IContainer) => {
  const { dark } = useTheme();

  return (
    <BlurView
      tint={!dark ? "light" : "dark"}
      intensity={intensity}
      style={[
        StyleSheet.absoluteFill,
        { borderRadius: radius, overflow: "hidden" },
        style,
      ]}
      {...props}>
      {children}
    </BlurView>
  );
};

export default Container;

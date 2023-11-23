import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { BlurView } from "expo-blur";
import { useTheme } from "react-native-paper";

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
      blurReductionFactor={116}
      style={[{ borderRadius: radius, overflow: "hidden" }, style]}
      {...props}>
      {children}
    </BlurView>
  );
};

export default Container;

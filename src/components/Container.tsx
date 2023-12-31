import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useAppTheme } from "../utils/theme";

interface IContainer {
  children?: React.ReactNode;
  opacity?: number;
  radius?: number;
  style?: StyleProp<ViewStyle>;
}

const Container = ({
  children,
  opacity = 1,
  radius,
  style,
  ...props
}: IContainer) => {
  const { dark } = useAppTheme();

  return (
    <View
      style={[
        {
          overflow: "hidden",
          borderRadius: radius,
          backgroundColor: !dark
            ? `rgba(255,255,255, ${opacity})`
            : `rgba(25, 25, 25, ${opacity})`,
        },
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

export default Container;

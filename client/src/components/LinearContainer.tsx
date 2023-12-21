import React from "react";
import AppStyles from "../utils/styles";
import {
  LinearGradient,
  LinearGradientPoint,
  LinearGradientProps,
} from "expo-linear-gradient";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "../utils/theme";

interface ILinearContainerProps {
  children: React.ReactNode;
  colors?: string[];
  start?: LinearGradientPoint | null;
  end?: LinearGradientPoint | null;
  locations?: number[] | null;
  style?: StyleProp<ViewStyle>;
}

const LinearContainer = ({
  children,
  colors,
  start,
  end,
  locations,
  style,
  ...props
}: ILinearContainerProps) => {
  const headerHeight = useHeaderHeight();
  const { bottom } = useSafeAreaInsets();
  const { colors: themeColors } = useAppTheme();

  return (
    <LinearGradient
      colors={colors || [themeColors.background, themeColors.background]}
      start={start}
      end={end}
      locations={locations}
      style={[
        styles.container,
        { paddingTop: headerHeight + 16, paddingBottom: bottom },
        style,
      ]}
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

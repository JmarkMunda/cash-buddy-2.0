import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { useAppTheme } from "../utils/theme";

interface IHeaderButton {
  name: any;
  size?: number;
  onPress: () => void;
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

const HeaderButton = ({
  name,
  size,
  onPress,
  tintColor,
  containerStyle,
  ...props
}: IHeaderButton) => {
  const { colors } = useAppTheme();

  return (
    <Pressable
      style={({ pressed }) => [pressed && { opacity: 0.5 }, containerStyle]}
      onPress={onPress}
      {...props}>
      <Ionicons name={name} size={size} color={colors.onBackground} />
    </Pressable>
  );
};

export default HeaderButton;

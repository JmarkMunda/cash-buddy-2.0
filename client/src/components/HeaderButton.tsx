import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

interface IHeaderButton {
  name: any;
  size?: number;
  onPress: () => void;
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
}

const HeaderButton = ({ name, size, onPress, tintColor }: IHeaderButton) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && { opacity: 0.5 }]}
      onPress={onPress}>
      <Ionicons name={name} size={size} color={tintColor} />
    </Pressable>
  );
};

export default HeaderButton;

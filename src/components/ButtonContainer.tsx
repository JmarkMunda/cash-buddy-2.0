import React from "react";
import { Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface IButtonContainer {
  children: React.ReactNode;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const ButtonContainer = ({
  children,
  onPress,
  containerStyle,
  disabled,
  ...props
}: IButtonContainer) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, containerStyle]}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export default ButtonContainer;

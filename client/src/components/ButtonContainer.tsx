import React from "react";
import { Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface IButtonContainer {
  children: React.ReactNode;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const ButtonContainer = ({
  children,
  onPress,
  containerStyle,
  ...props
}: IButtonContainer) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, containerStyle]}
      onPress={onPress}
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

import React from "react";
import { StyleSheet, View, StyleProp, ViewProps } from "react-native";
import { Modal as UIKModal, ModalProps } from "@ui-kitten/components";

interface IModal extends ModalProps {
  children: React.ReactNode;
  visible: boolean;
  onBackdropPress?: () => void;
  containerStyle?: StyleProp<ViewProps>;
  backdropStyle?: StyleProp<ViewProps>;
}

const Modal = ({
  children,
  visible,
  onBackdropPress,
  containerStyle,
  backdropStyle,
  ...props
}: IModal) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <UIKModal
        visible={visible}
        backdropStyle={[styles.backdrop, backdropStyle]}
        onBackdropPress={onBackdropPress}
        {...props}>
        {children}
      </UIKModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default Modal;

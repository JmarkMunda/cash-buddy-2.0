import React from "react";
import { StyleSheet, StyleProp, ViewProps } from "react-native";
import {
  Modal as PaperModal,
  ModalProps,
  Portal,
  PaperProvider,
} from "react-native-paper";

interface IModal extends ModalProps {
  children: React.ReactNode;
  visible: boolean;
  showModal?: () => void;
  hideModal?: () => void;
  containerStyle?: StyleProp<ViewProps>;
}

const Modal = ({
  children,
  visible,
  showModal,
  hideModal,
  containerStyle,
  ...props
}: IModal) => {
  return (
    <PaperProvider>
      <Portal>
        <PaperModal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
          {...props}>
          {children}
        </PaperModal>
      </Portal>
    </PaperProvider>
  );
};

export default Modal;

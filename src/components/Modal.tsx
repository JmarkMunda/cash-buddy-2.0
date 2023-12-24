import React from "react";
import { Modal as PaperModal, ModalProps, Portal } from "react-native-paper";

interface IModal extends ModalProps {
  children: React.ReactNode;
  visible: boolean;
  showModal?: () => void;
  hideModal?: () => void;
}

const Modal = ({
  children,
  visible,
  showModal,
  hideModal,
  ...props
}: IModal) => {
  return (
    <Portal>
      <PaperModal visible={visible} onDismiss={hideModal} {...props}>
        {children}
      </PaperModal>
    </Portal>
  );
};

export default Modal;

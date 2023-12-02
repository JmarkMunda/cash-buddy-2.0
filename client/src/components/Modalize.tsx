import React, { forwardRef } from "react";
import { Portal } from "react-native-paper";
import { Modalize as RNModalize, ModalizeProps } from "react-native-modalize";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Modalize = forwardRef((props: ModalizeProps, ref) => {
  const { children } = props;
  const { bottom } = useSafeAreaInsets();

  return (
    <Portal>
      <RNModalize
        ref={ref}
        adjustToContentHeight
        modalStyle={styles.modal}
        {...props}>
        <View style={{ marginBottom: bottom }}>{children}</View>
      </RNModalize>
    </Portal>
  );
});

const styles = StyleSheet.create({
  modal: {
    padding: 16,
  },
});

export default Modalize;

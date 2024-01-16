import React from "react";
import Modal from "../../../components/Modal";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";
import AppStyles from "../../../utils/styles";
import Button from "../../../components/Button";

const EditModal = () => {
  return (
    <Modal visible>
      <View style={styles.container}>
        <Text variant="titleLarge" style={{ textAlign: "center" }}>
          Edit transaction
        </Text>

        <View style={[AppStyles.flex_row, AppStyles.just_around]}>
          <Button mode="outlined">Cancel</Button>
          <Button mode="contained-tonal">Update</Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 36,
    padding: 16,
    borderRadius: 16,
  },
});

export default EditModal;

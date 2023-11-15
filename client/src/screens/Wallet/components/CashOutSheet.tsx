import React, { useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";
import Text from "../../../components/Text";
import AppStyles from "../../../utils/styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const CashOutSheet = (props: SheetProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <ActionSheet id={props.sheetId}>
      <View style={[AppStyles.container]}>
        <Text style={{ textAlign: "center" }}>
          How much money do you want to take out?
        </Text>

        <View style={styles.inputContainer}>
          <Input label="Title" value={title} onChangeText={setTitle} />
          <Input
            label="Description"
            value={description}
            onChangeText={setDescription}
          />
          <Input
            label="Amount"
            placeholder="0"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <Button status="info">Take out cash</Button>
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 16,
  },
});

export default CashOutSheet;

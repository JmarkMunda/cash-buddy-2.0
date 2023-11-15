import React from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";
import Text from "../../../components/Text";
import AppStyles from "../../../utils/styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

interface ISheetProps {
  label: string;
}

const CashInSheet = (props: SheetProps<ISheetProps>) => {
  return (
    <ActionSheet id={props.sheetId}>
      <View style={[AppStyles.container, styles.container]}>
        <Text style={{ textAlign: "center" }}>
          How much money do you want to put?
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <Button status="info">Add cash</Button>
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "40%",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgb(122, 122, 122)",
    borderRadius: 8,
    width: Dimensions.get("window").width / 6,
    fontSize: 50,
  },
});

export default CashInSheet;

import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ActionSheet, {
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";
import AppStyles from "../../../utils/styles";
import Button from "../../../components/Button";
import { useWalletStore } from "../../../zustand/wallet/store";
import ControlInput from "./ControlInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { cashInSchema } from "../../../utils/schema";
import { FormValues } from "../types";
import { useForm } from "react-hook-form";
import ControlDropdown from "./ControlDropdown";
import { defaultTags } from "../../../utils/constants";

interface IWalletSheetProps {
  type: "cash-in" | "cash-out";
}

const WalletSheet = (props: SheetProps<IWalletSheetProps>) => {
  // Global State
  const [loading, insertCash, takeOutCash, insertRecord] = useWalletStore(
    ({ loading, insertCash, takeOutCash, insertRecord }) => [
      loading,
      insertCash,
      takeOutCash,
      insertRecord,
    ]
  );
  // Local State
  const [value, setValue] = useState(null);
  // Form validation
  const { control, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: yupResolver(cashInSchema) as any,
    defaultValues: {
      tag: "",
      notes: "",
      amount: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setValue(null);
      reset();
      SheetManager.hide("wallet-sheet");
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormValues) => {
    if (props.payload?.type === "cash-in") {
      await insertCash(+data.amount);
    } else {
      await takeOutCash(+data.amount);
    }
    insertRecord({ type: props.payload?.type, date: new Date(), ...data });
  };

  return (
    <ActionSheet id={props.sheetId}>
      <View style={AppStyles.container}>
        <ControlDropdown
          value={value}
          setValue={setValue}
          items={defaultTags}
          name="tag"
          control={control}
          placeholder="Select a Tag"
        />

        <ControlInput
          name="amount"
          control={control}
          label={props.payload?.type}
          labelStyle={{ justifyContent: "center" }}
          keyboardType="number-pad"
          placeholder="0"
          autoFocus
          style={{
            textAlign: "center",
            fontSize: 32,
            marginVertical: 8,
            height: 100,
          }}
        />

        <ControlInput
          name="notes"
          placeholder="Add notes..."
          control={control}
          style={{
            marginVertical: 8,
            height: 50,
            fontSize: 16,
            textAlign: "center",
          }}
        />

        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          loading={loading}>
          {props.payload?.type === "cash-in" ? "Insert" : "Take out"}
        </Button>
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "rgb(122, 122, 122)",
    borderRadius: 8,
    width: Dimensions.get("window").width / 2,
    fontSize: 50,
  },
});

export default WalletSheet;

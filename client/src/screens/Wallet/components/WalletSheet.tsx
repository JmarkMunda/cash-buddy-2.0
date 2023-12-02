import React, { useEffect, useState } from "react";
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
import { alertAsync } from "../../../components/ToastAlert";
import { DropdownAlertType } from "react-native-dropdownalert";
import Container from "../../../components/Container";
import { useTheme } from "react-native-paper";

interface IWalletSheetProps {
  type: "cash-in" | "cash-out";
}

const WalletSheet = (props: SheetProps<IWalletSheetProps>) => {
  const { colors } = useTheme();
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
      alertAsync({
        type: DropdownAlertType.Success,
        title: "Success!",
        message: "Transaction complete",
      });
    }

    if (Object.keys(formState.errors).length) {
      alertAsync({
        type: DropdownAlertType.Error,
        title: "Failed!",
        message: Object.values(formState.errors)[0]?.message,
      });
    }
  }, [formState.isSubmitSuccessful, formState.errors, reset]);

  const onSubmit = async (data: FormValues) => {
    if (props.payload?.type === "cash-in") {
      await insertCash(+data.amount);
    } else {
      await takeOutCash(+data.amount);
    }
    insertRecord({ type: props.payload?.type, date: new Date(), ...data });
  };

  return (
    <ActionSheet id={props.sheetId} useBottomSafeAreaPadding>
      <Container style={AppStyles.container}>
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
          label={props.payload?.type === "cash-in" ? "CASH IN" : "CASH OUT"}
          labelStyle={{ justifyContent: "center" }}
          keyboardType="number-pad"
          placeholder="0"
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
          loading={loading}
          textColor="white"
          buttonColor={colors.secondaryContainer}>
          {props.payload?.type === "cash-in" ? "Insert" : "Take out"}
        </Button>
      </Container>
    </ActionSheet>
  );
};

export default WalletSheet;

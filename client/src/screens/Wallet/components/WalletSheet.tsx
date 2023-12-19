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
import { v1 as uuidv1 } from "uuid";
import { useTransactionsStore } from "../../../zustand/transactions/store";
import ColorPickerModal from "./ColorPickerModal";
import { View } from "react-native";
import Text from "../../../components/Text";
import ButtonContainer from "../../../components/ButtonContainer";
import spacings from "../../../utils/spacings";

interface IWalletSheetProps {
  type: "incomes" | "expenses";
}

const WalletSheet = (props: SheetProps<IWalletSheetProps>) => {
  const { colors } = useTheme();
  // Global State
  const [loading, insertCash, takeOutCash] = useWalletStore(
    ({ loading, insertCash, takeOutCash }) => [loading, insertCash, takeOutCash]
  );
  const insertRecord = useTransactionsStore(({ insertRecord }) => insertRecord);
  // Local State
  const [value, setValue] = useState(null);
  const [showColorModal, setShowColorModal] = useState(false);
  // Form validation
  const { control, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: yupResolver(cashInSchema) as any,
    defaultValues: {
      tag: "",
      notes: "",
      amount: "",
    },
  });

  const [color, setColor] = useState("#ffffff");

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
    if (props.payload?.type === "incomes") {
      await insertCash(+data.amount);
    } else {
      await takeOutCash(+data.amount);
    }
    insertRecord({
      id: uuidv1(),
      type: props.payload?.type,
      date: new Date(),
      color,
      ...data,
    });
  };

  // COLOR PICKER HANDLERS
  const handleSelectColor = (color: string) => {
    setColor(color);
  };

  return (
    <>
      <ActionSheet id={props.sheetId} useBottomSafeAreaPadding>
        <Container style={AppStyles.container}>
          <Text variant="labelLarge" style={{ alignSelf: "center" }}>
            {props.payload?.type === "incomes" ? "CASH IN" : "CASH OUT"}
          </Text>
          <ControlDropdown
            value={value}
            setValue={setValue}
            items={defaultTags}
            name="tag"
            control={control}
            placeholder="Select a Tag"
          />

          {/* COLOR PICKER */}
          <View
            style={[AppStyles.flex_row, AppStyles.just_between, spacings.py8]}>
            <View style={AppStyles.flex_row}>
              <Text variant="labelLarge">Color:</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: color,
                  marginHorizontal: 8,
                  borderRadius: 99,
                  borderWidth: 1,
                }}
              />
            </View>
            <ButtonContainer
              containerStyle={{ alignSelf: "flex-end" }}
              onPress={() => setShowColorModal((prev) => !prev)}>
              <Text variant="labelLarge"> Pick a color</Text>
            </ButtonContainer>
          </View>

          <ControlInput
            name="amount"
            control={control}
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
              fontSize: 14,
              textAlign: "center",
            }}
          />

          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            loading={loading}
            textColor="white"
            buttonColor={colors.secondaryContainer}>
            {props.payload?.type === "incomes" ? "Insert" : "Take out"}
          </Button>
        </Container>

        {/* MODAL */}
        <ColorPickerModal
          visible={showColorModal}
          handleClose={() => setShowColorModal(false)}
          handleSelectColor={handleSelectColor}
        />
      </ActionSheet>
    </>
  );
};

export default WalletSheet;

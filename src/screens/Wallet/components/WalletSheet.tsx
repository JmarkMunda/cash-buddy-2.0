import React, { useEffect, useState } from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";
import { useWalletStore } from "../../../zustand/wallet/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { cashInSchema } from "../../../utils/schema";
import { FormValues } from "../types";
import { useForm } from "react-hook-form";
import { defaultTags } from "../../../utils/constants";
import { alertAsync } from "../../../components/ToastAlert";
import { DropdownAlertType } from "react-native-dropdownalert";
import { v1 as uuidv1 } from "uuid";
import { useTransactionsStore } from "../../../zustand/transactions/store";
import { useAppTheme } from "../../../utils/theme";
import { Image, View } from "react-native";
import AppStyles from "../../../utils/styles";
import Button from "../../../components/Button";
import ControlInput from "./ControlInput";
import ControlDropdown from "./ControlDropdown";
import Container from "../../../components/Container";
import ColorPickerModal from "./ColorPickerModal";
import Text from "../../../components/Text";
import ControlColors from "./ControlColors";
import { notes } from "../../../../assets/images/assets";

interface IWalletSheetProps {
  type: "incomes" | "expenses";
}

const WalletSheet = (props: SheetProps<IWalletSheetProps>) => {
  const { colors } = useAppTheme();
  // Global State
  const [loading, insertCash, takeOutCash] = useWalletStore(
    ({ loading, insertCash, takeOutCash }) => [loading, insertCash, takeOutCash]
  );
  const insertRecord = useTransactionsStore(({ insertRecord }) => insertRecord);
  // Local State
  const [tag, setTag] = useState(null);
  const [showColorModal, setShowColorModal] = useState(false);
  // Form validation
  const { control, handleSubmit, reset, setValue, getValues, formState } =
    useForm<FormValues>({
      resolver: yupResolver(cashInSchema) as any,
      defaultValues: {
        tag: "",
        notes: "",
        amount: "",
        color: "",
      },
    });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setTag(null);
      reset();
      SheetManager.hide("wallet-sheet");
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
      ...data,
    });
  };

  // COLOR PICKER HANDLERS
  const handleSelectColor = (color: string) => {
    setValue("color", color, { shouldValidate: true });
  };

  return (
    <>
      <ActionSheet id={props.sheetId} useBottomSafeAreaPadding>
        <Container style={AppStyles.container}>
          <Text variant="titleMedium" style={{ alignSelf: "center" }}>
            {props.payload?.type === "incomes" ? "CASH IN" : "CASH OUT"}
          </Text>
          <ControlDropdown
            value={tag}
            setValue={setTag}
            items={defaultTags}
            name="tag"
            control={control}
            placeholder="Select a Tag"
          />

          {/* COLOR PICKER */}
          <ControlColors
            name="color"
            control={control}
            onPickColorPress={() => setShowColorModal(true)}
          />

          <ControlInput
            name="amount"
            control={control}
            labelStyle={{ justifyContent: "center" }}
            keyboardType="number-pad"
            placeholder="0"
          />

          <View
            style={[
              AppStyles.flex_row,
              AppStyles.items_center,
              AppStyles.just_center,
            ]}>
            <Image
              source={notes}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <ControlInput
              name="notes"
              placeholder="Add notes..."
              control={control}
              style={{
                marginVertical: 8,
                height: 50,
                fontSize: 14,
              }}
            />
          </View>

          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            loading={loading}
            disabled={!formState.isValid || loading}
            textColor="white"
            buttonColor={colors.secondaryContainer}>
            {props.payload?.type === "incomes"
              ? !loading
                ? "Insert"
                : "Inserting..."
              : !loading
              ? "Take out"
              : "Taking out..."}
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

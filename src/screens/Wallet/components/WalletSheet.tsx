import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";
import { yupResolver } from "@hookform/resolvers/yup";
import { walletSchema } from "../../../utils/schema";
import { FormValues } from "../types";
import { useForm } from "react-hook-form";
import { defaultTags } from "../../../utils/constants";
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
import { notes as noteImg } from "../../../../assets/images/assets";
import useWalletSheet from "../hooks/useWalletSheet";
import { RecordType } from "../../../zustand/transactions/transactionSlice";
import { v1 as uuidv1 } from "uuid";

interface IWalletSheetProps {
  type: "incomes" | "expenses";
  data?: RecordType;
}

const WalletSheet = (props: SheetProps<IWalletSheetProps>) => {
  const { colors } = useAppTheme();
  // EDIT DATA
  const { id, amount, color, date, tag, type, notes } =
    props.payload?.data || {};
  // CUSTOM HOOK
  const {
    loading,
    showColorModal,
    setShowColorModal,
    onSubmit,
    getHeaderText,
    getButtonText,
  } = useWalletSheet(props.payload.type);
  // FORM VALIDATION
  const { control, handleSubmit, setValue, formState } = useForm<FormValues>({
    resolver: yupResolver(walletSchema) as any,
    defaultValues: {
      id: props.payload.data ? id : uuidv1(),
      tag: props.payload.data ? tag : "",
      notes: props.payload.data ? notes : "",
      amount: props.payload.data ? amount : "",
      color: props.payload.data ? color : "",
      date: props.payload.data ? date : new Date(),
      type: props.payload.data ? type : props.payload.type,
    },
  });

  // COLOR PICKER HANDLERS
  const handleSelectColor = (color: string) => {
    setValue("color", color, { shouldValidate: true });
  };

  return (
    <>
      <ActionSheet id={props.sheetId} useBottomSafeAreaPadding>
        <Container style={AppStyles.container}>
          <Text variant="titleMedium" style={{ alignSelf: "center" }}>
            {getHeaderText(id, props.payload.type)}
          </Text>
          <ControlDropdown
            items={defaultTags}
            name="tag"
            control={control}
            placeholder="Select a Tag"
            setValue={setValue}
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
              source={noteImg}
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
            {getButtonText(id, props.payload.type)}
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

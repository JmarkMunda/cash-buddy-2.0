import React, { useCallback, useState } from "react";
import CardBalance from "./components/CardBalance";
import { Switch } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { add_wallet, minus_wallet } from "../../../assets/images/assets";
import { useSettingsStore } from "../../zustand/settings/store";
import { useAppTheme } from "../../utils/theme";
import { SheetManager } from "react-native-actions-sheet";
import LinearContainer from "../../components/LinearContainer";
import TransactionList from "./components/TransactionList";
import InOutCashButton from "./components/InOutCashButton";
import Text from "../../components/Text";
import WalletBalance from "./components/WalletBalance";

const WalletScreen = () => {
  const { colors } = useAppTheme();
  const [isBankView, toggleBankView] = useSettingsStore(
    ({ isBankView, toggleBankView }) => [isBankView, toggleBankView]
  );
  const bgColor = !isBankView
    ? [colors.primaryContainer, colors.surfaceVariant]
    : [colors.tertiaryContainer, colors.surfaceVariant];

  const onInsertCashPress = useCallback(async () => {
    await SheetManager.show("wallet-sheet", {
      payload: { type: "incomes" },
    });
  }, []);

  const onTakeOutCashPress = () => {
    SheetManager.show("wallet-sheet", {
      payload: { type: "expenses" },
    });
  };

  return (
    <LinearContainer
      colors={bgColor}
      locations={[0, 1]}
      start={{ x: 0.9, y: 0.1 }}
      end={{ x: 0.1, y: 0.9 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Balance */}
        <CardBalance isBankView={isBankView} />
        {/* {isBankView ? (
          <CardBalance isBankView={isBankView} />
        ) : (
          <WalletBalance />
        )} */}

        {/* Buttons */}
        <View style={styles.walletBtnContainer}>
          <InOutCashButton
            image={add_wallet}
            label={isBankView ? "Deposit cash" : "Insert cash"}
            onPress={onInsertCashPress}
          />
          <InOutCashButton
            image={minus_wallet}
            label={isBankView ? "Withdraw cash" : "Take out cash"}
            onPress={onTakeOutCashPress}
          />
        </View>
        {/* Lists */}
        <TransactionList isBankView={isBankView} />
      </ScrollView>
    </LinearContainer>
  );
};

const styles = StyleSheet.create({
  walletBtnContainer: {
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  walletBtn: {
    padding: 16,
  },
});

export default WalletScreen;

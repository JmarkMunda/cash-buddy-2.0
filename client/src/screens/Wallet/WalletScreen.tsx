import React, { useCallback, useState } from "react";
import CardBalance from "./components/CardBalance";
import { Switch, useTheme } from "react-native-paper";
import LinearContainer from "../../components/LinearContainer";
import { ScrollView, StyleSheet, View } from "react-native";
import { add_wallet, minus_wallet } from "../../../assets/images/assets";
import TransactionList from "./components/TransactionList";
import { SheetManager } from "react-native-actions-sheet";
import InOutCashButton from "./components/InOutCashButton";
import Text from "../../components/Text";
import WalletBalance from "./components/WalletBalance";
import { useSettingsStore } from "../../zustand/settings/store";

const WalletScreen = () => {
  const { colors } = useTheme();
  const [isBankView, toggleBankView] = useSettingsStore(
    ({ isBankView, toggleBankView }) => [isBankView, toggleBankView]
  );
  const bgColor = isBankView
    ? [colors.primaryContainer, colors.background]
    : [colors.tertiary, colors.background];

  const onInsertCashPress = useCallback(async () => {
    await SheetManager.show("wallet-sheet", {
      payload: { type: "cash-in" },
    });
  }, []);

  const onTakeOutCashPress = () => {
    SheetManager.show("wallet-sheet", {
      payload: { type: "cash-out" },
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
        {isBankView ? (
          <CardBalance isBankView={isBankView} />
        ) : (
          <WalletBalance />
        )}
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <Text>{!isBankView ? "Wallet" : "Bank"}</Text>
          <Switch value={isBankView} onValueChange={toggleBankView} />
        </View>
        {/* Buttons */}
        <View style={styles.walletBtnContainer}>
          <InOutCashButton
            image={add_wallet}
            label="Insert cash"
            onPress={onInsertCashPress}
          />
          <InOutCashButton
            image={minus_wallet}
            label="Take out cash"
            onPress={onTakeOutCashPress}
          />
        </View>
        {/* Lists */}
        <TransactionList />
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

import React, { useState } from "react";
import CardBalance from "./components/CardBalance";
import { useTheme } from "@react-navigation/native";
import LinearContainer from "../../components/LinearContainer";
import { ScrollView, StyleSheet, View } from "react-native";
import { add_wallet, minus_wallet } from "../../../assets/images/assets";
import TransactionList from "./components/TransactionList";
import { SheetManager } from "react-native-actions-sheet";
import InOutCashButton from "./components/InOutCashButton";
import CashInSheet from "./components/CashInSheet";
import CashOutSheet from "./components/CashOutSheet";

const WalletScreen = () => {
  const { colors } = useTheme();

  const onInsertCashPress = () => {
    SheetManager.show("insert-cash-sheet", {
      payload: { type: "insert" },
    });
  };

  const onTakeOutCashPress = () => {
    SheetManager.show("remove-cash-sheet", {
      payload: { type: "take-out" },
    });
  };

  return (
    <LinearContainer
      colors={[colors.primary, colors.background]}
      locations={[0, 1]}
      start={{ x: 0.9, y: 0.1 }}
      end={{ x: 0.1, y: 0.9 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardBalance />
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

      {/* Outside components */}
      <CashInSheet sheetId="insert-cash-sheet" />
      <CashOutSheet sheetId="remove-cash-sheet" />
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

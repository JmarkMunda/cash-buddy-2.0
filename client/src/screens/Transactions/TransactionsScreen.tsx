import React from "react";
import { View, StyleSheet } from "react-native";
import { useWalletStore } from "../../zustand/wallet/store";
import { useModalize } from "react-native-modalize";
import Text from "../../components/Text";
import TransactionsList from "./components/TransactionsList";
import AppStyles from "../../utils/styles";
import FilterModal from "./components/FilterModal";
import Header from "./components/Header";
import LinearContainer from "../../components/LinearContainer";
import { useTransactionsStore } from "../../zustand/transactions/store";

const TransactionsScreen = () => {
  const [records, filteredRecords, filters] = useTransactionsStore(
    ({ records, filteredRecords, filters }) => [
      records,
      filteredRecords,
      filters,
    ]
  );
  const { ref, open, close } = useModalize();

  return (
    <LinearContainer style={[styles.container]}>
      {/* ---- HEADER ----- */}
      <Header onFilterPress={open} />
      {filters && (
        <View style={{ alignSelf: "flex-end" }}>
          <Text variant="labelLarge" color="gray">
            {`Showing ${filteredRecords.length} out of ${records.length}`}
          </Text>
        </View>
      )}
      {/* ------- LIST ----- */}
      <TransactionsList records={!filters ? records : filteredRecords} />
      {/* ------- MODALS ------ */}
      <FilterModal ref={ref} handleClose={close} />
    </LinearContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...AppStyles.container,
  },
});

export default TransactionsScreen;

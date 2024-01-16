import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
import { useWalletStore } from "../../../zustand/wallet/store";
import { RecordType } from "../../../zustand/transactions/transactionSlice";
import { useTransactionsStore } from "../../../zustand/transactions/store";
import { useAppTheme } from "../../../utils/theme";
import TransactionCard from "./TransactionCard";
import Text from "../../../components/Text";
import EditModal from "./EditModal";
import { SheetManager } from "react-native-actions-sheet";

const TransactionsList = ({ records }) => {
  const { colors } = useAppTheme();
  const [takeOutCash, insertCash] = useWalletStore(
    ({ takeOutCash, insertCash }) => [takeOutCash, insertCash]
  );
  const [deleteRecord] = useTransactionsStore(({ deleteRecord }) => [
    deleteRecord,
  ]);

  const hiddenData = [
    {
      label: "Edit",
      color: colors.primary,
      handlePress: async (item: RecordType) => {
        await SheetManager.show("wallet-sheet", {
          payload: { data: item },
        });
      },
    },
    {
      label: "Delete",
      color: colors.error,
      handlePress: (item: RecordType) => {
        const { id, amount } = item;
        if (item.type === "incomes") {
          takeOutCash(+amount);
        } else {
          insertCash(+amount);
        }
        deleteRecord(item);
      },
    },
  ];

  const renderItem = ({ item }) => <TransactionCard item={item} />;

  return (
    <View style={styles.container}>
      <SwipeListView
        data={records}
        renderItem={renderItem}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.hiddenItemContainer}>
            {hiddenData.map((item) => (
              <TouchableOpacity
                key={item.label}
                style={[styles.hiddenItemBtn, { backgroundColor: item.color }]}
                onPress={() => item.handlePress(data.item)}>
                <Text variant="labelLarge" color={colors.background}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
        closeOnRowBeginSwipe
      />

      {/* <EditModal /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 2,
    flex: 1,
  },
  hiddenItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    marginVertical: 8,
  },
  hiddenItemBtn: {
    flex: 1,
    borderRadius: 10,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TransactionsList;

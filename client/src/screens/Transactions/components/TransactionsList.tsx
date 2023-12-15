import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
import TransactionCard from "./TransactionCard";
import Text from "../../../components/Text";
import { useTheme } from "react-native-paper";
import { useWalletStore } from "../../../zustand/wallet/store";
import { RecordType } from "../../../zustand/transactions/transactionSlice";
import { useTransactionsStore } from "../../../zustand/transactions/store";

const TransactionsList = ({ records }) => {
  const { colors } = useTheme();
  const [takeOutCash, insertCash] = useWalletStore(
    ({ takeOutCash, insertCash }) => [takeOutCash, insertCash]
  );
  const deleteRecord = useTransactionsStore(({ deleteRecord }) => deleteRecord);

  const hiddenData = [
    {
      label: "Edit",
      color: colors.primary,
      handlePress: () => {},
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
                <Text color={colors.background}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
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

import React from "react";
import { View, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import TransactionCard from "./TransactionCard";
import Text from "../../../components/Text";

const TransactionsList = ({ records }) => {
  const renderItem = ({ item }) => <TransactionCard item={item} />;

  return (
    <View style={styles.container}>
      <FlashList
        data={records}
        estimatedItemSize={96}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 2,
    flex: 1,
  },
});

export default TransactionsList;

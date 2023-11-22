import React from "react";
import { View, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import TransactionCard from "./TransactionCard";
import Text from "../../../components/Text";
import { useWalletStore } from "../../../zustand/wallet/store";

// onLayout={(e) => console.log(e.nativeEvent.layout.height)}

const TransactionsList = () => {
  const records = useWalletStore(({ records }) => records);

  const renderItem = ({ item }) => (
    <View>
      <TransactionCard item={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>SUB-HEADER</Text>
      <FlashList
        data={records}
        estimatedItemSize={70}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 2,
    flex: 1,
    padding: 16,
  },
});

export default TransactionsList;

import React from "react";
import Container from "../../../components/Container";
import spacings from "../../../utils/spacings";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";
import { RecordType } from "../../../zustand/wallet/transactionSlice";

interface ITransactionCard {
  item: RecordType;
}

const TransactionCard = ({ item }: ITransactionCard) => {
  const isExpense = item.type === "cash-out";
  const color = isExpense ? "#d35656" : "#499ce0";

  return (
    <Container style={[spacings.my8, spacings.p16]} intensity={100}>
      <View style={styles.contentContainer}>
        <Text category="label" color={color}>
          {item.tag}
        </Text>
        <Text category="label" color={color}>{`P${item.amount}`}</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 20,
  },
});

export default TransactionCard;

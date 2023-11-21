import React from "react";
import Container from "../../../components/Container";
import spacings from "../../../utils/spacings";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";
import { RecordType } from "../../../zustand/wallet/transactionSlice";
import { useTheme } from "@react-navigation/native";

interface ITransactionCard {
  item: RecordType;
}

const TransactionCard = ({ item }: ITransactionCard) => {
  const { colors } = useTheme();
  const isExpense = item.type === "cash-out";
  const color = isExpense ? "#d35656" : "#499ce0";

  return (
    <Container style={[spacings.my8, spacings.p16]} intensity={100}>
      <View style={styles.contentContainer}>
        <View>
          <Text variant="labelLarge" color={color}>
            {item.tag}
          </Text>
          <Text variant="labelMedium" color={colors.description}>
            {item.notes}
          </Text>
        </View>
        <Text variant="labelLarge" color={color}>{`P${item.amount}`}</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 40,
  },
});

export default TransactionCard;

import React from "react";
import Container from "../../../components/Container";
import spacings from "../../../utils/spacings";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";
import { RecordType } from "../../../zustand/transactions/transactionSlice";
import { useAppTheme } from "../../../utils/theme";

interface ITransactionCard {
  item: RecordType;
}

const TransactionCard = ({ item }: ITransactionCard) => {
  const { colors } = useAppTheme();
  const isExpense = item.type === "expenses";
  const color = isExpense ? colors.error : colors.primary;

  return (
    <Container style={[spacings.my8, spacings.p16]} opacity={0.8}>
      <View style={styles.contentContainer}>
        <View>
          <Text variant="labelLarge" color={color}>
            {item.tag}
          </Text>
          {item.notes && (
            <Text variant="labelMedium" color={colors.onSurfaceVariant}>
              {item.notes}
            </Text>
          )}
        </View>

        <View>
          <Text
            variant="labelLarge"
            color={color}
            style={{ fontWeight: "bold" }}>{`P${item.amount}`}</Text>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 40,
  },
});

export default TransactionCard;

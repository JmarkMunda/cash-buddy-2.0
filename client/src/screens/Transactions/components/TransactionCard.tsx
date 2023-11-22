import React from "react";
import Container from "../../../components/Container";
import Text from "../../../components/Text";
import { StyleSheet, View } from "react-native";
import { CustomLightTheme } from "../../../utils/theme";
import { ITransactionCard } from "../types";
import { useTheme } from "react-native-paper";

const TransactionCard = ({ item }: ITransactionCard) => {
  const { colors } = useTheme();
  const isExpense = item.type === "cash-out";
  const color = isExpense ? colors.error : colors.primary;

  return (
    <Container intensity={80} radius={8} style={styles.container}>
      <View style={styles.date}>
        <Text variant="bodyMedium">WED</Text>
        <Text variant="bodyMedium">01/20/2023</Text>
      </View>

      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <Text variant="titleMedium">{item.tag}</Text>
        <Text variant="bodyMedium" color={colors.onSurfaceVariant}>
          {item.notes}
        </Text>
      </View>

      <View>
        <Text variant="labelLarge" color={color}>{`P${item.amount}`}</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "white",
  },
  date: {
    borderRightWidth: 1,
    borderRightColor: CustomLightTheme.colors.outline,
    paddingRight: 8,
  },
});

export default TransactionCard;

import React from "react";
import Container from "../../../components/Container";
import Text from "../../../components/Text";
import { StyleSheet, View } from "react-native";
import { CustomLightTheme, useAppTheme } from "../../../utils/theme";
import { ITransactionCard } from "../types";
import formatDate from "../../../utils/formatDate";

const TransactionCard = ({ item }: ITransactionCard) => {
  const { colors } = useAppTheme();
  const isExpense = item.type === "expenses";
  const color = isExpense ? colors.error : colors.primary;
  const date = formatDate(item.date, "MM/DD/YY");
  const time = formatDate(item.date, "LT");

  return (
    <Container
      opacity={0.8}
      radius={8}
      style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.date}>
        <Text variant="bodyMedium" color={colors.inverseSurface}>
          {time}
        </Text>
        <Text variant="bodyMedium" color={colors.outline}>
          {date}
        </Text>
      </View>

      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <Text variant="titleMedium">{item.tag}</Text>
        <Text variant="bodyMedium" color={colors.outline}>
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
    height: 80,
  },
  date: {
    borderRightWidth: 1,
    borderRightColor: CustomLightTheme.colors.outline,
    paddingRight: 8,
  },
});

export default TransactionCard;

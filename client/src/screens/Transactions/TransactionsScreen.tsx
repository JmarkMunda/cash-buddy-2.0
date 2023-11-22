import React from "react";
import Text from "../../components/Text";
import { View, StyleSheet } from "react-native";
import Container from "../../components/Container";
import { useTheme } from "react-native-paper";
import TransactionsList from "./components/TransactionsList";

const TransactionsScreen = () => {
  const { colors } = useTheme();

  return (
    <Container style={[{ backgroundColor: colors.primary }, styles.container]}>
      <Text variant="headlineSmall">Transaction History</Text>
      <TransactionsList />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TransactionsScreen;

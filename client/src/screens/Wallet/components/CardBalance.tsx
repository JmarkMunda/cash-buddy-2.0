import React from "react";
import Text from "../../../components/Text";
import formatDate from "../../../utils/formatDate";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import Card from "../../../components/Card";
import AppStyles from "../../../utils/styles";

const CardBalance = () => {
  const { colors } = useTheme();

  return (
    <Card shadow="lg">
      <Text category="h3">Balance:</Text>
      <Text category="h6">P 10,000 </Text>
      <Text appearance="hint" style={{ alignItems: "flex-end" }}>
        {formatDate(new Date(), "l")}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default CardBalance;

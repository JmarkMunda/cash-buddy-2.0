import React from "react";
import Container from "../../../components/Container";
import spacings from "../../../utils/spacings";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";

const TransactionCard = () => {
  return (
    <Container style={[spacings.my8, spacings.p16]} intensity={100}>
      <View style={styles.contentContainer}>
        <Text>Bought a bag</Text>
        <Text>P300</Text>
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

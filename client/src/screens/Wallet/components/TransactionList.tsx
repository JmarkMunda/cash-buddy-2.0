import React from "react";
import Container from "../../../components/Container";
import Text from "../../../components/Text";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import spacings from "../../../utils/spacings";
import AppStyles from "../../../utils/styles";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const HEIGHT = Dimensions.get("window").height;

const TransactionList = () => {
  const tabBarHeight = useBottomTabBarHeight();

  const renderItem = ({ item, index }) => (
    <Container style={[spacings.my8, spacings.p16]} intensity={100}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text>Bought a bag</Text>
        <Text>P300</Text>
      </View>
    </Container>
  );

  // TODO: add fix height to transaction list or limit it to 5 only (status: done on ios)

  return (
    <View style={[AppStyles.flex, { marginBottom: tabBarHeight + 40 }]}>
      <Container intensity={80} style={[AppStyles.flex, styles.container]}>
        <View style={styles.transactionHeader}>
          <Text category="h6">Transactions</Text>
          <Text category="label">See All</Text>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={{ flex: 1 }}
        />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...spacings.p24,
    borderRadius: 16,
    height: HEIGHT / 2.5,
  },
  transactionHeader: {
    ...AppStyles.just_between,
    ...AppStyles.items_center,
    ...AppStyles.flex_row,
    marginBottom: 8,
  },
});

export default TransactionList;

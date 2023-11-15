import React from "react";
import Container from "../../../components/Container";
import Text from "../../../components/Text";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import spacings from "../../../utils/spacings";
import AppStyles from "../../../utils/styles";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import TransactionCard from "./TransactionCard";
import { FlashList } from "@shopify/flash-list";

const HEIGHT = Dimensions.get("window").height;

const TransactionList = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={[AppStyles.flex, { marginBottom: tabBarHeight + 40 }]}>
      <Container intensity={80} style={[AppStyles.flex, styles.container]}>
        <View style={styles.transactionHeader}>
          <Text category="h6">Transactions</Text>
          <Text category="label">See All</Text>
        </View>

        <View style={{ minHeight: 2, flex: 1 }}>
          <FlashList
            data={[1, 2, 3, 4, 5]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => <TransactionCard />}
            estimatedItemSize={20}
            nestedScrollEnabled
          />
        </View>
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

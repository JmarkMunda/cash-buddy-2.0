import React from "react";
import Container from "../../../components/Container";
import Text from "../../../components/Text";
import { TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import spacings from "../../../utils/spacings";
import AppStyles from "../../../utils/styles";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import TransactionCard from "./TransactionCard";
import { FlashList } from "@shopify/flash-list";
import { useWalletStore } from "../../../zustand/wallet/store";
import { useNavigation } from "@react-navigation/native";

const HEIGHT = Dimensions.get("window").height;

const TransactionList = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const records = useWalletStore(({ records }) => records);
  const navigation = useNavigation();

  const onSeeAllPress = () => {
    navigation.navigate("Transactions");
  };

  const renderItem = ({ item }) => <TransactionCard item={item} />;

  const renderEmpty = () => (
    <Text variant="bodyMedium" style={{ textAlign: "center" }}>
      No transactions
    </Text>
  );

  return (
    <View style={[AppStyles.flex, { marginBottom: tabBarHeight + 40 }]}>
      <Container intensity={50} style={[AppStyles.flex, styles.container]}>
        <View style={styles.transactionHeader}>
          <Text variant="titleMedium">Transactions</Text>
          <TouchableOpacity onPress={onSeeAllPress}>
            <Text variant="titleSmall">See all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ minHeight: 2, flex: 1 }}>
          <FlashList
            data={records}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            estimatedItemSize={20}
            ListEmptyComponent={renderEmpty}
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

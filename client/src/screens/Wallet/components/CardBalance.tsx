import React from "react";
import Text from "../../../components/Text";
import formatDate from "../../../utils/formatDate";
import { StyleSheet } from "react-native";
import Card from "../../../components/Card";
import spacings from "../../../utils/spacings";
import { ImageBackground } from "react-native";
import { card_wallet_bg } from "../../../../assets/images/assets";
import { useWalletStore } from "../../../zustand/wallet/store";

const CardBalance = () => {
  const [cashBalance, bankBalance] = useWalletStore((state) => [
    state.cashBalance,
    state.bankBalance,
  ]);

  return (
    <Card shadow="lg" style={{ padding: 0 }}>
      <ImageBackground
        source={card_wallet_bg}
        resizeMode="cover"
        style={{ ...spacings.p24, overflow: "hidden", borderRadius: 16 }}>
        <Text variant="titleMedium" color="white">
          Balance:
        </Text>
        <Text
          variant="displaySmall"
          color="white"
          style={[spacings.my4, { fontWeight: "bold" }]}>
          {`P ${cashBalance}`}
        </Text>

        <Text variant="labelSmall" color="white" style={{ marginTop: 8 }}>
          {formatDate(new Date(), "l")}
        </Text>
      </ImageBackground>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    shadowColor: "#000",
    backgroundColor: "transaparent",
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

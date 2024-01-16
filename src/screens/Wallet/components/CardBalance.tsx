import React, { useState } from "react";
import Text from "../../../components/Text";
import formatDate from "../../../utils/formatDate";
import { StyleSheet, View } from "react-native";
import Card from "../../../components/Card";
import { ImageBackground } from "react-native";
import { card_wallet_bg } from "../../../../assets/images/assets";
import { useWalletStore } from "../../../zustand/wallet/store";
import { IconButton } from "react-native-paper";

const CardBalance = ({ isBankView }) => {
  const [bankBalance, cashBalance] = useWalletStore(
    ({ bankBalance, cashBalance }) => [bankBalance, cashBalance]
  );
  const [visible, setVisible] = useState(false);

  const onEyePress = () => {
    setVisible((prev) => !prev);
  };

  return (
    <Card shadow="lg" style={{ padding: 0 }}>
      <ImageBackground
        source={card_wallet_bg}
        resizeMode="cover"
        style={{
          padding: 25,
          overflow: "hidden",
          borderRadius: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <View>
          <Text variant="titleSmall" color="white">
            Account Balance
          </Text>
          <Text
            variant="headlineMedium"
            color="white"
            style={[{ fontWeight: "bold", marginVertical: 4 }]}>
            {`P ${
              visible ? cashBalance : "*".repeat(cashBalance.toString().length)
            }`}
          </Text>

          <Text variant="labelSmall" color="white" style={{ marginTop: 8 }}>
            {formatDate(new Date(), "l")}
          </Text>
        </View>

        <IconButton
          icon={visible ? "eye-off" : "eye"}
          iconColor="white"
          animated
          onPress={onEyePress}
          style={{
            margin: 0,
            top: -10,
          }}
        />
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

{
  /* <Card shadow="lg" style={{ padding: 0 }}>
<ImageBackground
  source={card_wallet_bg}
  resizeMode="cover"
  style={{ ...spacings.p24, overflow: "hidden", borderRadius: 16, backgroundColor: 'brown' }}>
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
</Card> */
}

import React from "react";
import Text from "../../../components/Text";
import formatDate from "../../../utils/formatDate";
import { View } from "react-native";
import Card from "../../../components/Card";
import { ImageBackground } from "react-native";
import { card_wallet_bg } from "../../../../assets/images/assets";
import { useWalletStore } from "../../../zustand/wallet/store";
import { IconButton } from "react-native-paper";

export const CardBalance = ({ toggleWallet }) => {
  const [cashBalance, bankBalance] = useWalletStore((state) => [
    state.cashBalance,
    state.bankBalance,
  ]);

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
            variant="displaySmall"
            color="white"
            style={[{ fontWeight: "bold", marginVertical: 4 }]}>
            {`P ${cashBalance}`}
          </Text>

          <Text variant="labelSmall" color="white" style={{ marginTop: 8 }}>
            {formatDate(new Date(), "l")}
          </Text>
        </View>

        <View
          style={
            {
              // backgroundColor: "yellow",
            }
          }>
          <IconButton
            icon="eye"
            iconColor="white"
            animated
            style={{ backgroundColor: "red", margin: 0 }}
          />
          {/* <Text color="white" variant="titleMedium">
              Bank
            </Text>
            <Text variant="labelSmall" color="white" style={{ marginTop: 8 }}>
              {formatDate(new Date(), "l")}
            </Text> */}
          {/* <View
              style={{
                width: 35,
                height: 25,
                borderRadius: 8,
                backgroundColor: "#FFC300",
              }}
            /> */}
        </View>
      </ImageBackground>
    </Card>
  );
};

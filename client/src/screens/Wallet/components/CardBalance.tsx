import React from "react";
import Text from "../../../components/Text";
import formatDate from "../../../utils/formatDate";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import Card from "../../../components/Card";
import AppStyles from "../../../utils/styles";
import spacings from "../../../utils/spacings";
import { ImageBackground } from "react-native";
import { card_wallet_bg } from "../../../../assets/images/assets";

const CardBalance = () => {
  const { colors } = useTheme();

  return (
    <Card shadow="lg" style={{ padding: 0 }}>
      <ImageBackground
        source={card_wallet_bg}
        resizeMode="cover"
        style={{ ...spacings.p24, overflow: "hidden", borderRadius: 16 }}>
        <Text category="s1" color="white">
          Balance:
        </Text>
        <Text category="h3" color="white" style={spacings.my4}>
          P 10,000
        </Text>

        <Text
          category="c1"
          color="white"
          appearance="hint"
          style={{ marginTop: 8 }}>
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

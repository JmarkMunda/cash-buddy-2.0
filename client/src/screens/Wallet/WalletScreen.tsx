import React from "react";
import CardBalance from "./components/CardBalance";
import { useTheme } from "@react-navigation/native";
import LinearContainer from "../../components/LinearContainer";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Text from "../../components/Text";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { add_wallet, minus_wallet } from "../../../assets/images/assets";
import spacings from "../../utils/spacings";
import AppStyles from "../../utils/styles";
import TransactionList from "./components/TransactionList";
import ButtonContainer from "../../components/ButtonContainer";

const WalletScreen = () => {
  const { colors } = useTheme();

  return (
    <LinearContainer
      colors={[colors.primary, colors.background]}
      locations={[0, 1]}
      start={{ x: 0.9, y: 0.1 }}
      end={{ x: 0.1, y: 0.9 }}>
      <ScrollView nestedScrollEnabled={true}>
        <CardBalance />

        {/* Buttons */}
        <View style={styles.walletBtnContainer}>
          <ButtonContainer>
            <Container
              intensity={80}
              radius={16}
              style={[AppStyles.flex_center, spacings.p24]}>
              <Image source={add_wallet} style={{ width: 60, height: 60 }} />
              <Text category="label" color="#696969">
                Insert cash
              </Text>
            </Container>
          </ButtonContainer>

          <ButtonContainer>
            <Container
              intensity={80}
              radius={16}
              style={[AppStyles.flex_center, spacings.p24]}>
              <Image source={minus_wallet} style={{ width: 60, height: 60 }} />
              <Text category="label" color="#696969">
                Take out cash
              </Text>
            </Container>
          </ButtonContainer>
        </View>

        {/* Lists */}
        <TransactionList />
      </ScrollView>
    </LinearContainer>
  );
};

const styles = StyleSheet.create({
  walletBtnContainer: {
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  walletBtn: {
    padding: 16,
  },
});

export default WalletScreen;

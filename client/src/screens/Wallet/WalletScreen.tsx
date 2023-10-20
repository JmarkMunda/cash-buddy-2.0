import React from "react";
import CardBalance from "./components/CardBalance";
import { useTheme } from "@react-navigation/native";
import LinearContainer from "../../components/LinearContainer";
import Button from "../../components/Button";

const WalletScreen = () => {
  const { colors } = useTheme();

  return (
    <LinearContainer
      colors={[colors.primary, colors.background]}
      locations={[0, 1]}
      start={{ x: 0.9, y: 0.1 }}
      end={{ x: 0.1, y: 0.9 }}>
      <CardBalance />
      <Button status="basic" size="large" style={{ marginTop: 8 }}>
        This is button
      </Button>
    </LinearContainer>
  );
};

export default WalletScreen;

import React from "react";
import { ScrollView, View, TextInput } from "react-native";
import Text from "../../components/Text";
import { useTheme } from "react-native-paper";
import LinearContainer from "../../components/LinearContainer";
import Numpad from "./components/Numpad";
import spacings from "../../utils/spacings";
import Display from "./components/Display";

const CalculatorScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <LinearContainer
      colors={[colors.background, colors.background]}
      style={{ paddingHorizontal: 0 }}>
      {/* DISPLAY */}
      <Display />
      {/* INPUT PAD */}
      <Numpad />
    </LinearContainer>
  );
};

export default CalculatorScreen;

import React from "react";
import LinearContainer from "../../components/LinearContainer";
import Numpad from "./components/Numpad";
import Display from "./components/Display";
import { useAppTheme } from "../../utils/theme";

const CalculatorScreen = ({ navigation }) => {
  const { colors } = useAppTheme();

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

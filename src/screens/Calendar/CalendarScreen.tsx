import React from "react";
import { View } from "react-native";
import Text from "../../components/Text";
import LinearContainer from "../../components/LinearContainer";
import { useAppTheme } from "../../utils/theme";

const CalendarScreen = () => {
  const { colors } = useAppTheme();
  return (
    <LinearContainer colors={[colors.primaryContainer, colors.surfaceVariant]}>
      <Text variant="titleLarge">CalendarScreen</Text>
    </LinearContainer>
  );
};

export default CalendarScreen;

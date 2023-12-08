import React from "react";
import { ScrollView, View, TextInput } from "react-native";
import Text from "../../components/Text";
import { useTheme } from "react-native-paper";
import LinearContainer from "../../components/LinearContainer";
import Numpad from "./components/Numpad";
import spacings from "../../utils/spacings";

const CalculatorScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <LinearContainer
      colors={[colors.background, colors.background]}
      style={{ paddingHorizontal: 0 }}>
      {/* DISPLAY */}
      <View
        style={{
          height: "30%",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          // backgroundColor: "#c7c7c75c",
          backgroundColor: colors.surfaceVariant,
          padding: 16,
        }}>
        <TextInput
          value="100 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 +204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 04 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20 + 204 + 200 x 20"
          style={{
            flex: 1,
            fontSize: 18,
            marginVertical: 16,
            color: colors.outline,
          }}
          editable={false}
          multiline
        />
        <Text variant="displayMedium">524</Text>
      </View>
      {/* INPUT PAD */}
      <Numpad />
    </LinearContainer>
  );
};

export default CalculatorScreen;

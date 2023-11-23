import React from "react";
import { View } from "react-native";
import Text from "../components/Text";
import { Button } from "react-native-paper";

const CalculatorScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: 100 }}>
      <Text>Calculator Screen</Text>
      <Button onPress={() => navigation.navigate("Transactions")}>
        Go to transaction screen
      </Button>
    </View>
  );
};

export default CalculatorScreen;

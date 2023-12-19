import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { useAppTheme } from "../../../utils/theme";
import { useCalculatorStore } from "../../../zustand/calculator/store";
import Text from "../../../components/Text";
import spacings from "../../../utils/spacings";
import AppStyles from "../../../utils/styles";

const Display = () => {
  const { colors } = useAppTheme();
  const [total, expression, operator] = useCalculatorStore(
    ({ total, expression, operator }) => [total, expression, operator]
  );

  return (
    <View
      style={[styles.container, { backgroundColor: colors.surfaceVariant }]}>
      <TextInput
        value={total ? total.toString() : ""}
        style={[styles.totalContainer, { color: colors.background }]}
        editable={false}
        multiline
      />
      <View style={styles.expressionContainer}>
        <Text variant="displaySmall" color={colors.background}>
          {operator}
        </Text>
        <TextInput
          value={expression}
          placeholder="0"
          placeholderTextColor={colors.background}
          editable={false}
          style={{ fontSize: 36, fontWeight: "bold", color: colors.background }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "30%",
    padding: 16,
  },
  totalContainer: {
    flex: 1,
    fontSize: 48,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  expressionContainer: {
    ...spacings.my16,
    ...AppStyles.flex_row,
    ...AppStyles.just_between,
    ...AppStyles.items_center,
  },
});

export default Display;

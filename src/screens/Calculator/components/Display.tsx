import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { useAppTheme } from "../../../utils/theme";
import { useCalculatorStore } from "../../../zustand/calculator/store";
import Text from "../../../components/Text";
import spacings from "../../../utils/spacings";
import AppStyles from "../../../utils/styles";
import Container from "../../../components/Container";

const Display = () => {
  const { colors } = useAppTheme();
  const [total, expression, operator] = useCalculatorStore(
    ({ total, expression, operator }) => [total, expression, operator]
  );

  return (
    <Container opacity={0.5} style={[styles.container]}>
      <TextInput
        value={total ? total.toString() : ""}
        style={[styles.totalContainer, { color: colors.onBackground }]}
        editable={false}
        multiline
      />
      <View style={styles.expressionContainer}>
        <Text variant="displaySmall" color={colors.onBackground}>
          {operator}
        </Text>
        <TextInput
          value={expression}
          placeholder="0"
          placeholderTextColor={colors.onBackground}
          editable={false}
          style={{
            fontSize: 36,
            fontWeight: "bold",
            color: colors.onBackground,
          }}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "25%",
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

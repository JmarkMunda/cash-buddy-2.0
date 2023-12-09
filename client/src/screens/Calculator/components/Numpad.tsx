import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import { View, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { useCalculatorStore } from "../../../zustand/calculator/store";

const PADDING = 16;
const { width, height } = Dimensions.get("window");

const Numpad = () => {
  const { colors } = useTheme();
  const [
    expression,
    operator,
    handleOperator,
    handleExpression,
    handleAC,
    handleClear,
    handleCE,
    handleTotal,
    add,
    minus,
    multiply,
    divide,
  ] = useCalculatorStore(
    ({
      expression,
      operator,
      handleOperator,
      handleExpression,
      handleAC,
      handleClear,
      handleCE,
      handleTotal,
      add,
      minus,
      multiply,
      divide,
    }) => [
      expression,
      operator,
      handleOperator,
      handleExpression,
      handleAC,
      handleClear,
      handleCE,
      handleTotal,
      add,
      minus,
      multiply,
      divide,
    ]
  );

  const onKeyPadPress = async (value: string) => {
    // check if value is a number then create an expression (146....) else perform an operation (add, subtract)
    if (!isNaN(+value)) {
      handleExpression(value);
    } else {
      await handleOperator(value);
      handleComputation();
    }
  };

  const handleComputation = () => {
    if (expression === "") return;
    handleCE();
    switch (operator) {
      case "+":
        add(+expression);
        break;
      case "-":
        minus(+expression);
        break;
      case "*":
        multiply(+expression);
        break;
      case "/":
        divide(+expression);
        break;
      default:
        handleTotal(+expression);
        return;
    }
  };

  const onEqualsPress = () => {
    handleComputation();
    handleOperator("");
  };

  return (
    <View style={[styles.rootContainer]}>
      <View style={styles.firstRow}>
        <Button
          title="AC"
          width={width / 4 - PADDING}
          onPress={() => handleAC()}
        />
        <Button title="C" width={width / 4 - PADDING} onPress={handleClear} />
        <Button title="CE" width={width / 4 - PADDING} onPress={handleCE} />
        <Button
          title="/"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("/")}
          disabled={operator === "/"}
        />
      </View>
      <View style={styles.firstRow}>
        <Button
          title="7"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("7")}
        />
        <Button
          title="8"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("8")}
        />
        <Button
          title="9"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("9")}
        />
        <Button
          title="x"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("*")}
          disabled={operator === "*"}
        />
      </View>
      <View style={styles.firstRow}>
        <Button
          title="4"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("4")}
        />
        <Button
          title="5"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("5")}
        />
        <Button
          title="6"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("6")}
        />
        <Button
          title="-"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("-")}
          disabled={operator === "-"}
        />
      </View>
      <View style={styles.firstRow}>
        <Button
          title="1"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("1")}
        />
        <Button
          title="2"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("2")}
        />
        <Button
          title="3"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("3")}
        />
        <Button
          title="+"
          width={width / 4 - PADDING}
          disabled={operator === "+"}
          onPress={() => {
            onKeyPadPress("+");
          }}
        />
      </View>
      <View style={styles.firstRow}>
        <Button
          title="0"
          width={width / 4 - PADDING}
          onPress={() => onKeyPadPress("0")}
        />
        <Button title="." width={width / 4 - PADDING} onPress={() => {}} />
        <Button title="=" width={width / 2 - PADDING} onPress={onEqualsPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    height: "70%",
    justifyContent: "center",
    gap: 8,
    padding: 16,
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 8,
  },
});

export default Numpad;

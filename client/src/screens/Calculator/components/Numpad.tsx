import React from "react";
import Button from "./Button";
import { View, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";

const PADDING = 16;
const { width, height } = Dimensions.get("window");

const Numpad = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.rootContainer]}>
      <View style={styles.firstRow}>
        <Button title="AC" width={width / 4 - PADDING} />
        <Button title="C" width={width / 4 - PADDING} />
        <Button title="%" width={width / 4 - PADDING} />
        <Button title="/" width={width / 4 - PADDING} />
      </View>
      <View style={styles.firstRow}>
        <Button title="7" width={width / 4 - PADDING} />
        <Button title="8" width={width / 4 - PADDING} />
        <Button title="9" width={width / 4 - PADDING} />
        <Button title="x" width={width / 4 - PADDING} />
      </View>
      <View style={styles.firstRow}>
        <Button title="4" width={width / 4 - PADDING} />
        <Button title="5" width={width / 4 - PADDING} />
        <Button title="6" width={width / 4 - PADDING} />
        <Button title="-" width={width / 4 - PADDING} />
      </View>
      <View style={styles.firstRow}>
        <Button title="1" width={width / 4 - PADDING} />
        <Button title="2" width={width / 4 - PADDING} />
        <Button title="3" width={width / 4 - PADDING} />
        <Button title="+" width={width / 4 - PADDING} />
      </View>
      <View style={styles.firstRow}>
        <Button title="0" width={width / 4 - PADDING} />
        <Button title="." width={width / 4 - PADDING} />
        <Button title="=" width={width / 2 - PADDING} />
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
